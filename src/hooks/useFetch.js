import React from 'react'
import { FetchHandler, options } from 'api/api';
import { asyncWrapper } from 'utils/common.utils';
import axios from 'axios';
export default function useFetch({
  url,
  skipOnStart = false,
  method = 'GET',
  params = null,
  data,
  onSuccess,
  onFailure
}) {

  const [isLoading, setLoading] = React.useState(!skipOnStart)
  const [response, setData] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [preFetch, SetPrefetch] = React.useState(null);
  const [uploadActivity, setUploadActivity] = React.useState(null);
  const [dowloadActivity, setDowloadActivity] = React.useState(null);

  const callFetch = React.useCallback((config) => {
    setTimeout(() => {
      SetPrefetch(config??{url:url,method:method,data:data})
    }, 500)
  }, [])

  React.useEffect(() => {
    const cancelTokenSource = axios.CancelToken.source();
    const fetch = async () => {
      options.onDownloadProgress = function (e) {
        setDowloadActivity(e)
      }
      options.onUploadProgress = function (e) {
        setUploadActivity(e)
      }
      const { data: response, error } = await asyncWrapper(FetchHandler(preFetch ? preFetch : {
        url: url,
        method: method,
        data: data,
        params: params
      }))
      try {
        if (error) {
          setData(null)
          setLoading(false)
          setError(error)
          onFailure && onFailure(error, preFetch?.method ?? method)
        } else {
          setData(response)
          setLoading(false)
          setError(null)
          onSuccess && onSuccess(response, preFetch?.method ?? method)
        }
      } catch (error) {
        console.warn(error)
      }
    }

    if (!skipOnStart) {
      setLoading(true)
      fetch()
    } if (preFetch) {
      setLoading(true)
      fetch()
      SetPrefetch(null)
    }

    return () => {
      cancelTokenSource.cancel('Error occured ')
    };
  }, [
    onSuccess
    , onFailure
    , url
    , data
    , method
    , skipOnStart
    , params
    , preFetch
  ])

  const uploadingRate = React.useMemo(() => uploadActivity && `${(uploadActivity?.loaded / uploadActivity?.total) * 100}% `, [uploadActivity])
  
  return {
    uploadActivity,
    dowloadActivity,
    isLoading,
    uploadingRate,
    error,
    data: response,
    callFetch,
    onFailure,
    onSuccess,
  }
}
