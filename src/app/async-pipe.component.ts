import { combineLatest, Observable } from 'rxjs';

type State = {
  value: any;
};

@Component({})
export class AsyncPipeComponent {
  // Single State Stream
  readonly state$: Observable<State>;

  constructor(private dataService: DataService) {
    this.state$ = combineLatest(
      [this.dataService.valueChanges], // 必要なストリームを合成する
      ([value]) => ({ value }),
    );
  }
}