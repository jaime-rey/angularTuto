/**
 * Created by Jaime on 15/03/2017.
 */
import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Hero }           from './hero';

@Injectable()

export class HeroSearchService {

  constructor ( private http: Http){ }

  search ( term: string ): Observable<Hero[ ]> {

    return this.http
      .get ( `app/heroes/?name=${ term }`)
      .map ( respnse => respnse.json( ).data as Hero[ ] )

  }

}
