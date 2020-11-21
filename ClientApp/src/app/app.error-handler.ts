import { ErrorHandler, Injector, Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";
@Injectable()
export class AppErrorHandler implements ErrorHandler {
 private toastr: ToastrService;
 
 constructor (private injector: Injector) {}
 handleError(error: any) : void {
 this.toastr = this.injector.get(ToastrService);
 this.toastr.error('An unexpected error occurred.', 'Error', {
 timeOut: 5000,
 });
 }
}