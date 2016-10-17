import {ParseWrapper} from '../parse/parse.wrapper';
import {Deferred} from '../utils/util.deferred';
import {UserModel} from './user.model';

export class UserService extends ParseWrapper{

    constructor(){
        super("User");
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
        console.log("current user is " + this.getCurrentUser())
        if (this.getCurrentUser()) {
            return this.getCurrentUser().attributes;
        } else {
            return undefined;
        }
    }

    /**
     * Kills the session
     */
    public logOut(): any{
        return this.Parse.User.logOut();
    }
    


}