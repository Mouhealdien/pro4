import React from 'react'
import Tips from "../../components/Tips"
import { title } from 'process'
function index() {
    return (
        <div className="bg-gray-200 px-10 text-base    ">
            <div className="my-3 shadow  shadow-slate-300">
                <Tips title={"bla"} Added={"12"} currnt={"32"} lable={"lable"} />
            </div>
        </div>
    )
}

export default index