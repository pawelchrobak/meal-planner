import { Component, OnInit } from '@angular/core';
import { doc, docData, Firestore } from '@angular/fire/firestore';
import { traceUntilFirst } from '@angular/fire/performance';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AppState } from 'src/app/state/reducers';
import { getUserUid } from 'src/app/state/selectors/user.selectors';

@Component({
  selector: 'app-db-test',
  templateUrl: './db-test.component.html',
  styleUrls: ['./db-test.component.scss'],
})
export class DbTestComponent implements OnInit {
  public userMail$: Observable<any>;

  public uid$: Observable<string | null>;

  constructor(public firestore: Firestore, public store: Store<AppState>) {
    this.uid$ = this.store.pipe(select(getUserUid));

    const ref = doc(firestore, 'users/0fVeC9UbQ8deh1tEUXsCxUa03qp1');

    this.userMail$ = docData(ref).pipe(
      traceUntilFirst('firestore'),
      catchError((e) => {
        console.log(e);

        return of('error');
      })
    );

    // const ref = collection(firestore, 'users');

    // const q = query(
    //   ref,
    //   where('email', '==', 'chrobak.pawel@gmail.com')
    // )

    // getDoc(ref)

    // this.userMail$ = getDocs(q).

    // doc(this.firestore, 'test/1');
    // this.userMail$ = docData(ref).pipe(traceUntilFirst('firestore'));
  }

  ngOnInit(): void {}

  public add(input: string) {
    console.log(input);
    // const db =
  }
}
