import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const usePreventAccess = (callback) => {
  const location = useLocation();
  const [shouldShow, setShouldShow] = useState(false);
  const shouldRedirect = !location?.state || !location?.state?.isValid;

  useEffect(() => {
    setShouldShow(false);

    if (shouldRedirect) {
      callback();
    } else {
      setShouldShow(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  useEffect(() => {
    if (!shouldRedirect && shouldShow) {
      window.history.replaceState(null, '');
    }
  }, [shouldRedirect, shouldShow]);
};
