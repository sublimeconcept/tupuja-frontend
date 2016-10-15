import {ParseWrapper} from '../parse/parse.wrapper';
import {Deferred} from '../utils/util.deferred';
import {UserModel} from './user.model';

export class UserService extends ParseWrapper{
    private User;

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

    public logIn(username, password): Promise<any> {
        let deferred = new Deferred();
        this.model()
            .logIn(username, password, {
                success: function(user) {
                    deferred.resolve(user);
                },
                error: function(user, error) {
                    deferred.reject(error);
                }
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

        let q = new this.Parse.Query(this.User);
        q.find()
            .then(users => deferred.resolve(users),
                err => deferred.reject(err));
        return deferred.toPromise();
    }

    public create(userModel: UserModel): Promise<any>{
        let user = this.model();

        user.set("username", userModel.username);
        user.set("password", userModel.password);
        user.set("email", userModel.email);
        user.set("firstName", userModel.firstName);
        user.set("lastName", userModel.lastName);

        return user.signUp()
            .then((user)=>{
                console.log("User successfully created: ", user);
            },
            (err)=>{
                console.error("Error creating user: ", err);
            });
    }

    /**
     * Returns an object
     */
    public getCurrentUser(): Promise<any>{
       return this.model().current();
    }

    /**
     * Kills the session
     */
    public logOut(): any{
        return this.model().logOut();
    }
    


}