import { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

type Props = {
  onPlaceSearch?: (name: string) => void;
  onEventSearch?: (name: string) => void;
};

export const useLocationService = (props: Props) => {
  const { onEventSearch, onPlaceSearch } = props;

  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    if (
      location.search.includes('place') ||
      location.search.includes('event')
    ) {
        const urlSearchParams = new URLSearchParams(window.location.search);
        const params = Object.fromEntries(urlSearchParams.entries());
        console.log(params);
        if ('place' in params) {
            onPlaceSearch?.(params['place']);
            console.log(123)
        } 
        if ('event' in params) {
            onEventSearch?.(params['event']);
        
        }
    }
  }, []);
};
