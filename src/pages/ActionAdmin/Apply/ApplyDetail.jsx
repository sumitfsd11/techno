import React from 'react'
import { useParams } from 'react-router-dom';
import { useFetch } from "hooks";
import { LoaderWrapper } from 'components/utilsComponents/Loader';
export default function ApplyDetail() {
  const { id } = useParams()
  const { isLoading, data, callFetch } = useFetch({
    url: `/apply_get/${id}`,
    skipOnStart: false,
  })



  React.useEffect(() => {
    if (id) {
      callFetch({
        url: `/apply_get/${id}`,
        method: 'get',
      })
    }
  }, [callFetch ,id])

  const DetailUI = React.memo(() => {
    return (
      <React.Fragment>
        {JSON.stringify(data)}
      </React.Fragment>
    )
  }, [])
  return (
    <div>
      <LoaderWrapper isLoading={isLoading} component={<DetailUI />} />
    </div>
  )
}
