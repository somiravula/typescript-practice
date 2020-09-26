import { print } from "./print";
import { Observable, Subject, BehaviorSubject } from "rxjs";

export function example1() {
  const subject = new Subject<number>();

  subject.subscribe(value => {
    print("subscriber 1 => " + value);
  });

  subject.subscribe(value => {
    print("subscriber 2 => " + value);
  });

  subject.next(1);

  subject.next(2);

  subject.subscribe(value => {
    print("subscriber 3 => " + value);
  });

  subject.next(3);
}

export function example2() {
  const observable = new Observable(observer => {
    observer.next(1);
    observer.next(2);

    setTimeout(() => {
      observer.next(3);
    }, 3000);
  });

  observable.subscribe(value => {
    print("subscriber 1 => " + value);
  });

  observable.subscribe(value => {
    print("subscriber 2 => " + value);
  });

  setTimeout(() => {
    observable.subscribe(value => {
      print("subscriber 3 => " + value);
    });
  }, 5000);
}


export function example3() {
  const bs = new BehaviorSubject<number>(9999);

  bs.subscribe(value => {
    print("subscriber 1 => " + value);
  });

  bs.subscribe(value => {
    print("subscriber 2 => " + value);
  });

  bs.next(1);

  bs.next(2);

  bs.subscribe(value => {
    print("subscriber 3 => " + value);
  });

  bs.next(3);
}