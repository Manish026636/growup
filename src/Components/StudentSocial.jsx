import React from 'react'

const StudentSocial = () => {
  return (
    <div>
    <section class=" bg-white mb-20 ">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div class="max-w-2xl mx-auto text-center">
                <h2 class="text-2xl font-bold text-gray-800 sm:text-4xl sm:leading-tight">Student community from
                </h2>
            </div>

            <div class="grid items-center max-w-4xl grid-cols-4 mx-auto mt-12 md:mt-20 md:grid-cols-6 gap-x-10 gap-y-16">
                <div>
                    <img class="object-contain w-full lg:h-20 h-10 mx-auto" src="https://cdn.logojoy.com/wp-content/uploads/20210422095037/discord-mascot.png" alt="" />
                </div>

                <div>
                    <img class="object-contain w-full lg:h-20 h-10 mx-auto" src="data:image/jpeg;base64,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" alt="" />
                </div>

                <div>
                    <img class="object-contain w-full lg:h-20 h-10 mx-auto" src="data:image/jpeg;base64,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" alt="" />
                </div>

                <div>
                    <img class="object-contain w-full mx-auto lg:h-16 h-10" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALMAAAB8CAMAAAAVdHGgAAAAbFBMVEX/AAD/////y8v/xMT/+vr/0dH/9/f/qan/o6P/sLD/2Nj/rq7/cHD/4OD/XV3/iIj/n5//6Oj/8fH/ubn/gYH/tLT/LS3/v7//SUn/Hx//WVn/lJT/JSX/ZWX/ERH/NTX/eXn/Pj7/jo7/UVEvGTCAAAAEvElEQVR4nO2c7ZaqIBSGRQVLxVIzcxpL6/7v8QhmZanhtAFZ67x/Z8Jnmi3sL7aF5st1CUmSOKaU+o0wtp2b8jzNsnXgMQVrrizNu586to3ZB5rP0ThOEuK67h8ejyzRXyQU2+nquNlVYVlG0fVwPu9/i+JkzdWpKIrf/bk+XKMoKsuw2m2Oq8zBNIZgJrGPnXRblYfZYH9WHYWXILV9msxmdnGwC38Ov+pg+zqdr2XlUWFmmpXz/+OStHMGvu83ZlrtdYP2dFi9vafWK7FuxgFl7hRzps2AJxUlo8wk1A03psIeYU4Wi9zsI84gM7nqBptUOsRc6aaa1il+Zz7qhvqkOnllprqRPmvzwuwu25hb0T5zqptHRGGfeVnn9ZjsZ2ZfN42Yds/MCz5NenpiThQ69V8JP5ixbhZRbR7MmW4WUZUP5o1uFlHV8Z3ZFHO+GTRn1k0irqxjTnSTiOvSMRuzbVjWtWP2dJPMUMe80w0yQx2zKSc3k98yk0g3yAylLbMx3gbTpWWmy0zEDKtqmfFiMooCKltmWzfHHP0QzgwTC9Ygq3zUIebMAchiOFfyKu8pZ76ALGYjd6sgEj5hzgxzpLCYOFZwotqcGeZIaeN4+gOy2IRSzgzz9nQZ4vwMstyoMs4Ms9Y9q+2upJ5RWxnMjYHIjC93cpgR8uW5XaUs5uagkrXvRYw5hlnrhVnabl0zZqBs+SuzrFpjwZiBcqLvzJLMmjEDRd1DzMiVUCRlzA7MUoPMDfURmpoxA5UlRpgbswYOkRkzjCs6ztyYNagTwphXMEtNMCOSAYZvpGHewiw1xczMuoB5jGXFDTNQAXaauTEQKLNmzDBhykfmJlaGMWvaMAM5YZ+ZEfEgzNpXytxo8/1uzZiBYjgxZkS/Ps7VMyOEv2wH0MGMkvVXD8I6mNlu/Z9ZPvOXtvH/HRSRgXvd5ntXycSzWykzkI+k0K8D80UTVf4zoM+vKE4Bja3UxIPwMazsuFtGrkBufkNOTgaopDmS+wJ79e6SnK+TkWOUmxeVk8s9SMw/y8qZ8zw/UNeXqtqEtHqKxBqQpLqV1FqblPqg5JrmmjPDPEJt7RjmyoSqGr3DmUuQtVT1QrT9GzAPUtRzUvicGcYZVdTbU7f9SDCd8Yp6qK4JZwYqEKpR5JrXE8juLzXMvkm9l7uWOTapx9VD5vUSO8i8nm16Y650g8wQQsbdQTh1zAbd9fjpmF3dJOI6dswG3V1a35mlO71gsu/Mi7+P3ulM78y5bhZRsW7+G7MxHkd7w5szE1MMOnswG3O5lDwxA/W5ylaEnpgNuRGb9piNiK/aXeMxf8OEt7CbKdMxG2DR3SiLx2wWoDKhPO3jN+bF34rF6J154bOGPDTAvOiZTrcT8I0ZEZgMqQw9I7/MKAvgS5AQuvbHHr7MgvOX+FV7k7PgGuFwWd91fSSviAOzDX1PUV5WQFU+MA1zZIYkzS9hdN1ry5j+HqLwMjSLcYKZiSTUt9PgGEYKv/d9FB6zHPvxm0UIMfflsmGjwfbyGIpa/3EoqnWbi9qORb1NRfUYpyCKMHP/D3BJEvPhs2z6LLbt2/RZNnmWjZ5drbatVlxe8DSC1sa4nT/Lxs/+afrsP1NKN40hRrhvAAAAAElFTkSuQmCC" alt="" />
                </div>

                <div class="hidden md:block">
                    <img class="object-contain w-full lg:h-20 h-10 mx-auto" src="data:image/png;base64,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" alt="" />
                </div>

                <div class="hidden md:block">
                    <img class="object-contain w-full lg:h-20 h-10 mx-auto" src="data:image/jpeg;base64,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" alt="" />
                </div>


            </div>


        </div>
    </section>


</div>
  )
}

export default StudentSocial