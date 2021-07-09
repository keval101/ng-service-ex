import { Component, Input} from '@angular/core';
import { AccountsService } from '../accounts.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LoggingService]
})
export class AccountComponent {

  constructor(private newStatus:LoggingService, private accountsService: AccountsService) { }

  @Input() account: {name: string; status: string; };
  @Input() id: number;
  // @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  
  onSetTo(status: string) {
    // this.statusChanged.emit({id: this.id, newStatus: status});
    // console.log('A server status changed, new status: ' + status);
    this.accountsService.updateStatus(this.id, status)
    // this.newStatus.logStatusChange(status);
    this.accountsService.statusUpdate.emit(status)
  }
}
