import React from 'react'
import { useParams } from 'react-router-dom';
import { useFetch } from "hooks";
import { LoaderWrapper } from 'components/utilsComponents/Loader';
export default function ApplyDetail() {
  const { id } = useParams()
  const { isLoading, data, callFetch } = useFetch({
    url: `/about_us/${id}`,
    skipOnStart: false,
  })



  React.useEffect(() => {
    if (id) {
      callFetch({
        url: `/about_us/${id}`,
        method: 'get',
      })
    }
  }, [callFetch])

  console.log(data, "  ==== data id ==  ", id)

  const DetailUI = React.memo(()=>{
    return (
      <React.Fragment>

      </React.Fragment>
    )
  },[])
  return (
    <div>
      <LoaderWrapper isLoading={isLoading} component={<DetailUI/>} />
    </div>
  )
}
