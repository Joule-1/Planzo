class ApiError extends Error{
    constructor(
        stausCode, 
        message = "Something Went Wrong",
        errors = [],
        stack = ""
    ){
        super(message);
        this.stausCode = stausCode;
        this.message = message;
        this.success = false;
        this.errors = errors;
   

        if(stack){
            this.stack = stack;
        }
        else{
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export default ApiError;