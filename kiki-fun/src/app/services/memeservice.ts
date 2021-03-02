import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Meme } from '../interfaces/meme';



@Injectable()
export class MemeService {

    constructor(private http: HttpClient) { }

    getMeme() {
        return this.http.get<any>('assets/meme.json')
        .toPromise()
        .then(res => <Meme[]>res.data)
        .then(data => { return data; });
    }

}