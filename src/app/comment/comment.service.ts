import { Injectable } from "@angular/core"
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Comment} from "./comment.model"
import {AppUrl} from "app/appservice/AppUrl.services"

@Injectable()
export class HttpCommentService{
    
    constructor (private http: Http,private appUrl:AppUrl){
    }

    getComments(): Observable<any> {
        return this.http.get(this.appUrl.RootLocation+"comment/comments").map(this.extractData);        
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || [];
    }

    getComment(Id:number){
        return this.http.get(this.appUrl.RootLocation+'comment/comment/'+Id).map(this.extractData);
    }

    postComment(comment: Comment): Observable<any>  {
        
        const headers: Headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-type', 'application/json');

        const opts: RequestOptions = new RequestOptions();
        opts.headers = headers;

        return this.http.post(this.appUrl.RootLocation+'comment/comment', comment , opts);
    }

    deleteComment(Id:number){
        return this.http.delete(this.appUrl.RootLocation + 'comment/comment/'+ Id);
    }

    editComment(comment:Comment){

        const headers: Headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-type', 'application/json');

        const opts: RequestOptions = new RequestOptions();
        opts.headers = headers;

        return this.http.put(this.appUrl.RootLocation+'comment/comment/'+comment.Id, comment , opts);
    }
}