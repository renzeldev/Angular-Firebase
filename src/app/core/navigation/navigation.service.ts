import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject, tap } from 'rxjs';
import { Navigation } from 'app/core/navigation/navigation.types';
import { navigationItems } from './navigation.item';

@Injectable({
    providedIn: 'root'
})
export class NavigationService
{
    private _navigation: ReplaySubject<any> = new ReplaySubject<any>(1);

    /**
     * Constructor
     */
    constructor(private _httpClient: HttpClient)
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Getter for navigation
     */
    get navigation$(): Observable<Navigation>
    {
        this._navigation.next(navigationItems);
        return this._navigation.asObservable();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Get all navigation data
     */
    // get(): Observable<any>
    // {
    //     return this._navigation.next(navigationItems);
    //     // return this._navigation.next(navigationItems);
    //     return this._httpClient.get<Navigation>('api/common/navigation').pipe(
    //         tap((navigation) => {
    //             console.log(navigation)
    //             this._navigation.next(navigation);
    //             // this._navigation.next(navigationItems);
    //         })
    //     );
    // }

}
