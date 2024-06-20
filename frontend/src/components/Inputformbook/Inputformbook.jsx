import { useRef } from "react"
import { BASE_URL, Book_POST } from "../../redux-toolkit/API-URL";
import { useDispatch } from "react-redux";


const Inputformbook = () => {

    let title = useRef();
    let authore = useRef();
    let description = useRef();
    let price = useRef();
    let rating = useRef();
    let image = useRef();

    let dispatch = useDispatch();

    let addbook = () => {
        let newbook = {
            title: title.current.value,
            authore: authore.current.value,
            description: description.current.value,
            price: price.current.value,
            rating: rating.current.value,
            image: image.current.value
        }
        console.log(newbook);
        dispatch(postData({
            payload: newbook,
            endpoint:  Book_POST,
            dataType: "book",
        }));
    }

    return (
        <>
            <div className='flex flex-wrap items-center justify-center h-[700px]'>
                <div className="gap-2 p-6 items-center pt-50 rounded-lg shadow-lg bg-white max-w-sm">
                    <div className="text-center font-bold text-xl text-gray-700">Add Book</div>
                    <div className="form-group mb-6">
                        <label className="form-label  mb-2 text-gray-700">Book Title</label>
                        <input type='text' name='name' className="form-control w-full px-3 py-1.5 text-base font-normal  text-gray-700  bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Book Title" ref={title} />
                    </div>
                    <div className="form-group mb-6">
                        <label className="form-label  text-gray-700">Author</label>
                        <input type='text' name='age' className="form-control w-full px-3 py-1.5 text-base font-normal  text-gray-700  bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder=" Author" ref={authore} />
                    </div>
                    <div className="form-group mb-6">
                        <label className="form-label  mb-2 text-gray-700">Description</label>
                        <input type='text' name='name' className="form-control w-full px-3 py-1.5 text-base font-normal  text-gray-700  bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Description" ref={description} />
                    </div>
                    <div className="form-group mb-6">
                        <label className="form-label  mb-2 text-gray-700">Price</label>
                        <input type='text' name='name' className="form-control w-full px-3 py-1.5 text-base font-normal  text-gray-700  bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Price" ref={price} />
                    </div>
                    <div className="form-group mb-6">
                        <label className="form-label  mb-2 text-gray-700">Rating</label>
                        <input type='text' name='name' className="form-control w-full px-3 py-1.5 text-base font-normal  text-gray-700  bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Rating" ref={rating} />
                    </div>
                    <div className="form-group mb-6">
                        <label className="form-label  mb-2 text-gray-700">Book Image</label>
                        <input type='text' name='name' className="form-control w-full px-3 py-1.5 text-base font-normal  text-gray-700  bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Book Image" ref={image} />
                    </div>
                    <button className=" px-6 py-2.5 w-full bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" onClick={addbook}>Submit</button>
                </div>
            </div>
        </>
    )
}

export default Inputformbook