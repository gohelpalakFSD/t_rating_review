import React, { useEffect, useState } from 'react'
import './Rating.css'
import { MdBlock } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { BiLogIn } from 'react-icons/bi';

function Rating() {
    const [star, setstar] = useState("")
    const [show, setshow] = useState(true)
    const [obj, setobj] = useState({})
    const [list, setlist] = useState([])
    useEffect(() => {
        let newlist = JSON.parse(localStorage.getItem("reviews")) || []
        setlist(newlist)
    }, [setlist])

    let setinput = (e) => {
        let value = e.target.value
        setobj({ ...obj, "Name": value })
    }
    let submitdata = (e) => {
        e.preventDefault()
        console.log(star);
         if(!star) {
            alert("star requires");
        }
        else{
            console.log("huuu");
            let newobj = { ...obj, "stars": star }
            let arr = [...list, newobj]
            setlist(arr)
            localStorage.setItem("reviews", JSON.stringify(arr))
            setstar("")
        }
    }

    return (
        <>
            <div className='container'>
            {/* <h1 style={{font:"30px"}}>{err.info}hii</h1> */}
                <form action="" method='post' onSubmit={(e) => { submitdata(e) }}>
                    <div>
                        <h1>Rate us</h1>
                        <div>
                            <div className='info'>
                                <button type='button' className='icon' onClick={() => { setshow(!show) }}>{!show ? "Undo" : <MdBlock />}</button>
                                {show &&
                                    <div style={{ marginLeft: "10px" }}>
                                        {
                                            [1, 2, 3, 4, 5].map((val, i) => {
                                                i = i + 1
                                                return (
                                                    <FaStar onClick={() => { setstar(i) }} style={star >= i ? { color: "blue" } : ""} className='star-icon' />
                                                )
                                            })
                                        }

                                    </div>
                                }
                            </div>
                            <div >
                                <textarea name="" id="" placeholder='Add a Comment' style={{ width: "300px", height: "100px" }} onChange={(e) => { setinput(e) }}></textarea>
                            </div>
                        </div>
                    </div>
                    <input type="submit" />
                </form>
               

            </div>
            <div className="container-2">
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                    {
                        list.map((val, i) => {
                            return (
                                <>
                                    <div className='review-data'>
                                        <div className='review-about'>
                                            {val.stars == 1 &&
                                                <FaStar />
                                            }
                                            {val.stars == 2 &&
                                                <>
                                                    <FaStar />
                                                    <FaStar />
                                                </>
                                            }
                                            {val.stars == 3 &&
                                                <>
                                                    <FaStar />
                                                    <FaStar />
                                                    <FaStar />
                                                </>
                                            }
                                            {val.stars == 4 &&
                                                <>
                                                    <FaStar />
                                                    <FaStar />
                                                    <FaStar />
                                                    <FaStar />
                                                </>
                                            }
                                            {val.stars == 5 &&
                                                <>
                                                    <FaStar />
                                                    <FaStar />
                                                    <FaStar />
                                                    <FaStar />
                                                    <FaStar />
                                                </>
                                            }
                                            <h4>{val.Name}</h4>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }

                </div>
            </div>
        </>
    )
}

export default Rating