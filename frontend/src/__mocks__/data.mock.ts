import { ModalData } from '../types/setings';

export const modalStack: ModalData[] = [
  {
    key: '1',
    title: `.BaseModal {
        position: relative;
        padding: var(--space-xl);
    
        &-Container {
            margin-top: var(--space-s);
        }
    
        &-Button {
            position: absolute;
            top: var(--space-l);
            right: var(--space-l);
            @include clear();
            
        }
    }.BaseModal {
        position: relative;
        padding: var(--space-xl);
    
        &-Container {
            margin-top: var(--space-s);
        }
    
        &-Button {
            position: absolute;
            top: var(--space-l);
            right: var(--space-l);
            @include clear();
            
        }
    }`,
  },
  {
    key: '2',
    title: 'example 2',
  },
];
