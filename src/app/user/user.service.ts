import {Injectable} from '@angular/core';
import {ParseComponent} from '../parse/parse.component';
import {Deferred} from '../utils/util.deferred';
import {UserModel} from './user.model';

@Injectable()
export class UserService extends ParseComponent{

    private User;

    constructor(){
        super();
        this.User = new this.Parse.User();
    }

    public save(user: UserModel): Promise<any> {
        let deferred = new Deferred();

        this.User
            .save(user)
                .then((data)=> {
                    deferred.resolve(data);
                },
                (err)=> {
                    deferred.reject(err);
                });
            

        return deferred.toPromise();
    }

    public getUserById(id: string): Promise<UserModel>{
        let deferred = new Deferred();

        this.User
            .get(id)
                .then((data)=>{
                    deferred.resolve(data);
                },
                (err) => {
                    deferred.reject(err);
                });

        return deferred.toPromise();
    }


}