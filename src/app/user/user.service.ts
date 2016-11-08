import {ParseWrapper} from '../parse/parse.wrapper';
import {Deferred} from '../utils/util.deferred';
import {UserModel} from './user.model';
import { Subject }    from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export class UserService extends ParseWrapper{

    private _loggedIn = new BehaviorSubject(false);

    constructor(){
        super("User");
        this.determineUserLoggedIn();
    }

    private determineUserLoggedIn(){        
        let user = this.getCurrentUser();
        if(user){
            this._loggedIn.next(true);
        }
    }

    public save(user: UserModel): Promise<any> {
        let deferred = new Deferred();
        this.model()
            .save(user)
                .then((data)=> {
                    deferred.resolve(data);
                },
                (err)=> {
                    deferred.reject(err);
                });
            

        return deferred.toPromise();
    }

    public logIn(username, password): Promise<UserModel> {
        let deferred = new Deferred();
        this.Parse.User
            .logIn(username, password)
                .then((user) => {
                    this._loggedIn.next(true);
                    deferred.resolve(user);
                },
                (err)=>{                    
                    deferred.reject(err);
                });
        return deferred.toPromise();
    }

    public getUserById(id: string){
        let deferred = new Deferred();
        let q = this.query().equalTo('username', id);
        q.find()            
                .then((data)=>{
                    deferred.resolve(data);
                },
                (err) => {
                    deferred.reject(err);
                });

        return deferred.toPromise();
    }

    public getAllUsers(){
        let deferred = new Deferred();

        let q = new this.Parse.Query(this.model());
        q.find()
            .then(users => deferred.resolve(users),
                err => deferred.reject(err));
        return deferred.toPromise();
    }

    public create(userModel: UserModel): Promise<any>{
        let user = this.model();
        let deferred = new Deferred();
        user.set("username", userModel.username);
        user.set("password", userModel.password);
        user.set("email", userModel.email);
        user.set("firstName", userModel.firstName);
        user.set("lastName", userModel.lastName);
        user.signUp()
            .then((user)=>{
                console.log("User successfully created: ", user.objectId);
                deferred.resolve(user);
            },
            (err)=>{
                console.error("Error creating user: ", err);
                deferred.reject(err);
            });
        return deferred.toPromise();
    }

    /**
     * Returns an object
     */
    public getCurrentUser(): any{
       return this.Parse.User.current();
    }

    public currentUser(): any {
        if (this.getCurrentUser()) {
            return this.getCurrentUser().attributes;
        } else {
            return undefined;
        }
    }

    public isUserLoggedIn(){
        return this._loggedIn;
    }

    /**
     * Kills the session
     */
    public logOut(): any{
        this._loggedIn.next(false);
        return this.Parse.User.logOut();
    }

    public hasEnoughCredit(){
        return this.getCurrentUser().get('credits') > 0;
    }
    


}