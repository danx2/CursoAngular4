import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/observable';

export class ErrorHandler {
    static handleError(error: HttpErrorResponse | any) {
        let errorMessage: string;

        if (error instanceof HttpErrorResponse) {
            const body = error.error;
            // errorMessage = `Erro ${error.status} ao acessar a URL ${error.url} - ${body}`;
            errorMessage = `${error.url}: ${error.status} - ${error.statusText || ''} ${body}`
        }else {
            errorMessage = error.toString();
        }

        console.log(errorMessage);
        return Observable.throw(errorMessage);
    }
}
