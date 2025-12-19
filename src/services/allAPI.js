import commonAPI from "./commonAPI"
import serverURL from "./serverURL"

//register api: called by Auth component when register btn clicked
export const registerAPI = async (userDetails)=>{
    return await commonAPI ("POST",`${serverURL}/register`,userDetails)

}

//login api: called by Auth component when login btn clicked

export const loginAPI = async (userDetails)=>{
    return await commonAPI ("POST",`${serverURL}/login`,userDetails)

}

//google/sign-in api: called by Auth component when login using google btn clicked

export const googleLoginAPI = async (userDetails) => {
    return await commonAPI("POST",`${serverURL}/google/sign-in`,userDetails)
}


///user/book/add - add book api : called by SellerBook 

export const addBookAPI = async (reqBody,reqHeader) =>{
return await commonAPI("POST",`${serverURL}/user/book/add`,reqBody,reqHeader)
}

///books/home - homepage book api : called  

export const getHomePageBooksAPI = async () =>{
return await commonAPI("GET",`${serverURL}/books/home`,{})
}

///books/all -  bookpage api : called by Books component when page loads - authorised user 

export const getAllBooksPageAPI = async (reqHeader,searchKey) =>{
return await commonAPI("GET",`${serverURL}/books/all?search=${searchKey}`,{},reqHeader)
}

///user-books/all -  bookpage api : called by booksstatus component when page loads - authorised user 

export const getAllUserBooksAPI = async (reqHeader) =>{
return await commonAPI("GET",`${serverURL}/user-books/all`,{},reqHeader)
}

///user-books/all -  bookpage api : called by booksstatus component when page loads - authorised user 

export const getAllBoughtUserBooksAPI = async (reqHeader) =>{
return await commonAPI("GET",`${serverURL}/user-books/bought`,{},reqHeader)

}

///user-books/all -  bookpage api : called by booksstatus component when page loads - authorised user 

export const viewBookAPI = async (reqHeader,id) =>{
return await commonAPI("GET",`${serverURL}/books/${id}/view`,{},reqHeader)

}


