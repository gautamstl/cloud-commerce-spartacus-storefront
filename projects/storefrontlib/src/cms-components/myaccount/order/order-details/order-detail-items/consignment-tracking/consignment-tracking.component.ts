import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import {
  Consignment,
  UserOrderService,
  ConsignmentTracking,
} from '@spartacus/core';
import { TrackingEventsComponent } from './tracking-events/tracking-events.component';
import { ModalRef, ModalService } from '../../../../../../shared/components/modal/index';

import { Observable } from 'rxjs';

@Component({
  selector: 'cx-consignment-tracking',
  templateUrl: './consignment-tracking.component.html',
})
export class ConsignmentTrackingComponent implements OnInit, OnDestroy {
  consignmentStatus: string[] = [
    'SHIPPED',
    'IN_TRANSIT',
    'DELIVERY_COMPLETED',
    'DELIVERY_REJECTED',
    'DELIVERING',
  ];
  modalRef: ModalRef;

  @Input()
  consignment: Consignment;
  @Input()
  orderCode: string;
  consignmentTracking$: Observable<ConsignmentTracking>;

  constructor(
    private userOrderService: UserOrderService,
    private modalService: ModalService,
  ) {}

  ngOnInit() {
    this.consignmentTracking$ = this.userOrderService.getConsignmentTracking();
  }

  openTrackingDialog(consignment: Consignment) {
    this.userOrderService.loadConsignmentTracking(
      this.orderCode,
      consignment.code
    );
    let modalInstance: any;
    this.modalRef = this.modalService.open(TrackingEventsComponent, {
      centered: true,
      size: 'lg',
    });

    modalInstance = this.modalRef.componentInstance;
    modalInstance.tracking$ = this.consignmentTracking$;
    modalInstance.shipDate = consignment.statusDate;
    modalInstance.consignmentCode = consignment.code;
  }

  ngOnDestroy(): void {
    this.userOrderService.clearConsignmentTracking();
  }
}
