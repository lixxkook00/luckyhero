import React from 'react'
import './Wallet.scss'

export default function Wallet() {
  return (
    <div className="container-fluid">
        <div className="wallet-page container">
            <div className="page-break-title">
                <div className="text">Your Wallet</div>
            </div>
            <div className="row">
                <div className="col-lg-6 col-12">
                    <div className="box-crypto mx-auto">
                    <div className="box-crypto-center border-0">
                        <div className="crypto-img"><img src="./images/wallet.48409f44.svg" alt="" /><span> Your Balance</span></div>
                        <div className="crypto-price"> 753.0857 </div>
                        <div className="crypto-symbol">HBG</div>
                    </div>
                    <div className="box-crypto-center">
                        <div className="crypto-img"></div>
                        <div className="crypto-price"> ~ 41.3497 </div>
                        <div className="crypto-symbol">USD</div>
                    </div>
                    <div className="box-crypto-top">
                        <div className="crypto-img"><img src="./images/logo.072d07f3.svg" alt="" /><span>Rate</span></div>
                        <div className="crypto-rate"> 0.0549 </div>
                        <div className="crypto-symbol">HBG/USD</div>
                    </div>
                    <div className="box-crypto-bot">
                        <button type="button" className="btn btn-secondary">
                            <img src="./images/deposit.c98463a5.svg" alt="" />
                            <div className="text">Deposit</div>
                        </button>
                        <button type="button" className="btn btn-secondary">
                            <img src="./images/transfer.ca466abd.svg" alt="" />
                            <div className="text">Transfer</div>
                        </button>
                        <button type="button" className="btn btn-secondary">
                            <img src="./images/withdraw.4b5f0df3.svg" alt="" />
                            <div className="text">Withdraw</div>
                        </button>
                        
                    </div>
                    </div>
                </div>
                <div className="col-lg-6 col-12">
                    <div className="box-crypto mx-auto">
                    <div className="box-crypto-center border-0">
                        <div className="crypto-img">
                            <img src="./images/wallet.48409f44.svg" alt="" /><span> Your Balance</span></div>
                        <div className="crypto-price"> 0 </div>
                        <div className="crypto-symbol">USDT</div>
                    </div>
                    <div className="box-crypto-center">
                        <div className="crypto-img"></div>
                        <div className="crypto-price"> ~ 0 </div>
                        <div className="crypto-symbol">USD</div>
                    </div>
                    <div className="box-crypto-top">
                        <div className="crypto-img"><img src="./images/logo.072d07f3.svg" alt="" /><span>Rate</span></div>
                        <div className="crypto-rate"> 1 </div>
                        <div className="crypto-symbol">USDT/USD</div>
                    </div>
                    <div className="box-crypto-bot">
                        <button type="button" className="btn btn-secondary">
                            <img src="./images/deposit.c98463a5.svg" alt="" />
                            <div className="text">Deposit</div>
                        </button>
                        <button type="button" className="btn btn-secondary">
                            <img src="./images/transfer.ca466abd.svg" alt="" />
                            <div className="text">Transfer</div>
                        </button>
                        <button type="button" className="btn btn-secondary">
                            <img src="./images/withdraw.4b5f0df3.svg" alt="" />
                            <div className="text">Withdraw</div>
                        </button>
                        
                    </div>
                    </div>
                </div>
            </div>
            <div className="page-break-title">
                <div className="text">History</div>
            </div>
            <div className="navigator-history">
                <button variant="none" className="navigator-history-item active"> Wallet </button>
                <button variant="none" className="navigator-history-item"> Commission </button>
            </div>
            
            <div className="table-responsive table-wallet">
                <table role="table" aria-busy="false" aria-colcount="5" className="table b-table table-striped table-hover" id="__BVID__27">
                    
                    <thead role="rowgroup" className="customer-header">
                    
                    <tr role="row" className="">
                        <th role="columnheader" scope="col" aria-colindex="1" className="text-center">
                            <div>Amount</div>
                        </th>
                        <th role="columnheader" scope="col" aria-colindex="2" className="text-center">
                            <div>Currency</div>
                        </th>
                        <th role="columnheader" scope="col" aria-colindex="3" className="text-center">
                            <div>Fee</div>
                        </th>
                        <th role="columnheader" scope="col" aria-colindex="4" className="text-left">
                            <div>Comment</div>
                        </th>
                        <th role="columnheader" scope="col" aria-colindex="5" className="text-center">
                            <div>Time</div>
                        </th>
                    </tr>
                    </thead>
                    <tbody role="rowgroup">
                    
                    <tr role="row" className="">
                        <td aria-colindex="1" role="cell" className="text-center">2.92001124</td>
                        <td aria-colindex="2" role="cell" className="text-center"> USDT </td>
                        <td aria-colindex="3" role="cell" className="text-center">0.00000000</td>
                        <td aria-colindex="4" role="cell" className="text-left">Claim 52.365390034544 HBG - 2.92001123868$ from balance pool 1460.00561934, percent 0.2%</td>
                        <td aria-colindex="5" role="cell" className="text-center"> 29/09/2022, 05:58:18 </td>
                    </tr>
                    <tr role="row" className="">
                        <td aria-colindex="1" role="cell" className="text-center">2.92001124</td>
                        <td aria-colindex="2" role="cell" className="text-center"> HBG </td>
                        <td aria-colindex="3" role="cell" className="text-center">0.00000000</td>
                        <td aria-colindex="4" role="cell" className="text-left">Receive 52.365390034544 HBG - 2.92001123868$ from balance pool 1460.00561934, percent 0.2%</td>
                        <td aria-colindex="5" role="cell" className="text-center"> 29/09/2022, 05:58:18 </td>
                    </tr>
                    
                    </tbody>
                    
                </table>
            </div>
            <div className="wallet-paginate w-100">
                <div className="paginate mx-auto justify-content-center">
                    <button type="button" className="btn btn-secondary" >
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAPCAYAAADd/14OAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAClSURBVHgBjdLNDcIgFABgIIEjcQS8cNYRHMURnEA3cARH6Qh4I+EnOoIJRxLw1VjSNqX0XeCRL/AegNBKKKV2w5zUkNZacM6V9/7a57iGGGNdzllA+gkh7HELpZROUson3oImR6+hAluodE0pffwRAnSZowJjjGcY3r8FQu7GmMMcTmqEnTuYimqNW/DiPS7h6suMMfRwRLXosXPuZa29oVaMf88XPI6CBro0dq0AAAAASUVORK5CYII=" alt="" />
                    </button>
                    <button type="button" className="btn paginate-content btn-secondary"> Page 1/5 </button>
                        <button type="button" className="btn btn-secondary">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAPCAYAAADd/14OAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC1SURBVHgBhZLPDYMgFMZ9Gj0aR6gXEm5dwVE6QifoCE0n6CiOQG8kJARG8AwBCoaa+gf8DuQBv/fxQSiKKEJIV2RUhoFz/mjbllBKLykQwmbTNMQ51wGAVEoNGGO5cwyLxpjBQ5OHQ9N45Ay/gjF2rapqTDnDf1cOhu0RKbjcggihj898D3XIXNf1e3meA8dnnEqt9S2bMUL7jDloAc+gGRRCdNZakYPmy/R9P3nwlYNWOvs9X3NDlSIDwIqvAAAAAElFTkSuQmCC" alt="" />
                    </button>
                </div>
            </div>
            
        </div>
    </div>
  )
}
