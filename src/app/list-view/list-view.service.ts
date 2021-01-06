import { Injectable } from '@angular/core';

import { PoTableColumn } from '@po-ui/ng-components';

@Injectable()
export class ListViewService {
  getColumns(): Array<PoTableColumn> {
    return [
      { property: 'id', type: 'number', width: '15%' },
      { property: 'completed',
        type: 'label',
        width: '75%',
        labels: [
          { value: 'true', color: 'color-11', label: 'Completed' },
          { value : 'false', color: 'color-8', label: 'Pendent'}
        ]
      }
    ];
  }
}