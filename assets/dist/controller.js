import { Controller } from '@hotwired/stimulus';
import DataTable from 'datatables.net-dt';

let isDataTableInitialized = false;

class DataTableController extends Controller {
    static targets =  ['viewValue'];

    connect() {
        if (isDataTableInitialized) {
            return;
        }

        const payload = this.viewValue;

        new DataTable(this.element, payload);

        isDataTableInitialized = true;
    }
}

DataTableController.values = {
    view: Object,
};

export { DataTableController as default };