import React from 'react'
import './PoolInformation.scss'

export default function PoolInformation() {
  return (
    <div id="poolAdd" className="container">
        <div className="pool-add mx-auto col-xl-11 col-12">
            <div className="pool-add-title d-flex flex-wrap mb-4">
                <div className="col-12 col-md-6">
                    <a href="/pool" className="d-flex align-items-center active">
                    <button className="add-button-new effectScale">
                        <p>
                            <img src="/images/plus-2.ed1e9cdb.svg" alt="" /></p>
                        <h4>Add Pool</h4>
                    </button>
                    </a>
                </div>
                <div className="col-12 col-md-6 d-flex justify-content-center justify-md-content-end align-items-start pool-remaining my-2">
                    <div className="pool-add-title-box">
                    <p className="form-title"> Pool Remaining <span>1,457.09</span><span> USD</span></p>
                    </div>
                </div>
            </div>
            <div className="pool-add-content d-flex flex-wrap-reverse overflow-hidden">
                <div className="col-lg-5 col-12 py-3 h-100">
                    <div className="pool-add-content-form">
                    <div className="group-claim">
                        <button type="button" className="btn button-claimed btn-secondary disabled" disabled="disabled"><span> Lucky Claim x0 </span></button>
                        <div className="box-time-claimed">
                            <span className="date">
                                02:57:45 
                            </span>
                        </div>
                    </div>
                    <div className="group-box-balance w-100">
                        <div className="w-100 pool-balance-box">
                            <div className="line"></div>
                            <div className="content">
                                <p className="form-title">Claimed Today</p>
                                <p> 0 <span>USD</span></p>
                            </div>
                        </div>
                        <div className="w-100 pool-balance-box">
                            <div className="line"></div>
                            <div className="content">
                                <p className="form-title">Total Pool</p>
                                <p> 1,490 <span>USD</span></p>
                            </div>
                        </div>
                        <div className="w-100 pool-balance-box">
                            <div className="line"></div>
                            <div className="content">
                                <p className="form-title">Total Claimed</p>
                                <p> 32.9143 <span>USD</span></p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-7 col-12 py-3 d-flex w-100 h-lg-100 pool-hero">
                    <div className="row w-100 mx-0 align-items-center overflow-lg-hidden">
                    <div className="col-12 col-sm-9 pool-add-content-col7 h-lg-100">
                        <div className="pool-add-content-item">
                            <div className="pool-description-img">
                                <div className="pool-effect"><img src="/images/logo.072d07f3.svg" alt="" /><span className="bg-color-effect"></span></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-3 d-flex flex-column align-items-center list-hero-in-pool">
                        <div className="add-square-btn">
                            <button>
                                <img src="/images/btn-square.251b0c96.png" alt="Button" />
                                <div className="hover-mask"><img src="/images/common.66854ab2.svg" alt="" /></div>
                            </button>
                        </div>
                        <div className="add-square-btn">
                            <button>
                                <img src="/images/btn-square.251b0c96.png" alt="Button" />
                                <div className="hover-mask"><img src="/images/rare.cf48f3b3.svg" alt="" /></div>
                            </button>
                        </div>
                        <div className="add-square-btn">
                            <button>
                                <img src="/images/btn-square.251b0c96.png" alt="Button" />
                                <div className="hover-mask"><img src="/images/epic.8f7c0a68.svg" alt="" /></div>
                            </button>
                        </div>
                        <div className="add-square-btn">
                            <button>
                                <img src="/images/btn-square.251b0c96.png" alt="Button" />
                                <div className="hover-mask"><img src="/images/legend.5739ef99.svg" alt="" /></div>
                            </button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="pool-table p-3">
            <div className="pool-title d-flex align-items-center">
                <div className="rectangle"></div>
                <h4>History</h4>
            </div>
            <div className="ticket-table">
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th scope="col">
                            <p className="text-center">Name</p>
                        </th>
                        <th scope="col" className="text-center">
                            <p className="line">Amount</p>
                        </th>
                        <th scope="col" className="text-center">
                            <p className="line">Currency</p>
                        </th>
                        <th scope="col" className="text-center">
                            <p className="line">Fee</p>
                        </th>
                        <th scope="col" className="text-center">
                            <p>Comment</p>
                        </th>
                        <th scope="col" className="text-center">
                            <p className="line">Time</p>
                        </th>
                        <th scope="col" className="text-center">
                            <p>Status</p>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="text-center"> Claim </td>
                        <td className="text-center"> 2.9200 </td>
                        <td className="text-center"> USDT </td>
                        <td className="text-center"> 0 </td>
                        <td className="text-center"> Claim 52.365390034544 HBG - 2.92001123868$ from balance pool 1460.00561934, percent 0.2% </td>
                        <td className="text-center"> 29/09/2022, 05:58:18 </td>
                        <td className="text-center text-uppercase text-aqua"> Confirm </td>
                    </tr>
                    <tr>
                        <td className="text-center"> Claim </td>
                        <td className="text-center"> 3.0724 </td>
                        <td className="text-center"> USDT </td>
                        <td className="text-center"> 0 </td>
                        <td className="text-center"> Claim 52.415952540651 HBG - 3.072463974951$ from balance pool 1463.07808331, percent 0.21% </td>
                        <td className="text-center"> 27/09/2022, 04:05:52 </td>
                        <td className="text-center text-uppercase text-aqua"> Confirm </td>
                    </tr>
                    <tr>
                        <td className="text-center"> Claim </td>
                        <td className="text-center"> 1.7578 </td>
                        <td className="text-center"> USDT </td>
                        <td className="text-center"> 0 </td>
                        <td className="text-center"> Claim 32.179424862703 HBG - 1.757803063644$ from balance pool 1464.83588637, percent 0.12% </td>
                        <td className="text-center"> 26/09/2022, 03:05:46 </td>
                        <td className="text-center text-uppercase text-aqua"> Confirm </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div className="pool-paginate w-100 mt-3">
                <div className="paginate mx-auto justify-content-center"><button type="button" className="btn btn-secondary" ><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAPCAYAAADd/14OAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAClSURBVHgBjdLNDcIgFABgIIEjcQS8cNYRHMURnEA3cARH6Qh4I+EnOoIJRxLw1VjSNqX0XeCRL/AegNBKKKV2w5zUkNZacM6V9/7a57iGGGNdzllA+gkh7HELpZROUson3oImR6+hAluodE0pffwRAnSZowJjjGcY3r8FQu7GmMMcTmqEnTuYimqNW/DiPS7h6suMMfRwRLXosXPuZa29oVaMf88XPI6CBro0dq0AAAAASUVORK5CYII=" alt="" /></button><button type="button" className="btn paginate-content btn-secondary"> Page 1/2 </button><button type="button" className="btn btn-secondary"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAPCAYAAADd/14OAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC1SURBVHgBhZLPDYMgFMZ9Gj0aR6gXEm5dwVE6QifoCE0n6CiOQG8kJARG8AwBCoaa+gf8DuQBv/fxQSiKKEJIV2RUhoFz/mjbllBKLykQwmbTNMQ51wGAVEoNGGO5cwyLxpjBQ5OHQ9N45Ay/gjF2rapqTDnDf1cOhu0RKbjcggihj898D3XIXNf1e3meA8dnnEqt9S2bMUL7jDloAc+gGRRCdNZakYPmy/R9P3nwlYNWOvs9X3NDlSIDwIqvAAAAAElFTkSuQmCC" alt="" /></button></div>
            </div>
        </div>
    </div>
  )
}
