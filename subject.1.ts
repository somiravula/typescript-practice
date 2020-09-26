import { print } from "./print";
import { Observable, Subject, BehaviorSubject, ReplaySubject, AsyncSubject } from "rxjs";

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
  print(bs.getValue());
}


export function example4() {
  const sub = new ReplaySubject(1); //count of last emmited values that we want to give to new subcriber
  sub.next(1);
  sub.next(2);
  sub.subscribe(value => {
    print('subcriber 1 =>' + value)
  }); // OUTPUT => 1,2
  sub.next(3); // OUTPUT => 3
  sub.next(4); // OUTPUT => 4
  sub.subscribe(value => {
    print('subcriber 2 =>' + value)
  }); // OUTPUT => 2,3,4 (log of last 3 values from new subscriber)
  sub.next(5);
}
export function example5() {
  const sub = new AsyncSubject();

  sub.subscribe(value => {
    print('subcriber 1 =>' + value)
  });
  sub.next(123); //nothing logged

  sub.subscribe(value => {
    print('subcriber 2 =>' + value)
  });

  sub.next(456); //nothing logged
  sub.complete();  //will logged 456,456
}