import React from 'react'
import './Ticket.scss'

export default function Ticket() {
  return (
    <div id="ticket">
    <div class="container py-3">
        <div class="d-flex flex-wrap-reverse">
            <div class="ticket-table col-lg-8 pt-4">
                <div class="new-section w-100 text-right px-0 mb-2">
                </div>
                <table class="table table-striped">
                <thead >
                    <tr>
                        <th scope="col" class="text-center">
                            <p>No.</p>
                        </th>
                        <th scope="col" class="text-center">
                            <p class="line">Problem</p>
                        </th>
                        <th scope="col" class="text-center">
                            <p>Status</p>
                        </th>
                        <th scope="col" class="text-center">
                            <p class="line">Time</p>
                        </th>
                        <th scope="col" class="text-center">
                            <p>Action</p>
                        </th>
                    </tr>
                </thead>
                <tbody class="empty-table">
                    <tr class="empty-table-box h-100 d-flex align-items-center">
                        <div class="empty-table-content">
                            <img src="/images/rafiki.3ddffbb9.png" alt="" />
                            <h5>No Data</h5>
                        </div>
                    </tr>
                </tbody>
                </table>
            </div>
            <div class="ticket-form col-lg-4">
                <div class="px-3">
                <div class="ticket-form-box">
                    <div class="d-flex align-items-center">
                        <img src="/images/Ticket.png" alt="Ticket" />
                        <div class="line"></div>
                        <p>New Ticket</p>
                    </div>
                    <form class="form-submit">
                        <label for="ticketName" class="pt-4 pb-3">
                            <span >Ticket name</span>
                            <input type="text" id="ticketName" spellcheck="false" />
                        </label>
                        <label for="priorty" class="d-flex flex-column pt-4 pb-3">
                            <span >Priority</span>
                            <select  >
                            <option value="1"> Request </option>
                            <option value="2"> Send </option>
                            <option value="3"> Upload KYC </option>
                            </select>
                        </label>
                        <label for="description" class="pt-4 pb-3">
                            <span>Description</span>
                            <textarea type="text" id="description" spellcheck="false"></textarea>
                        </label>
                        <div class="d-flex justify-content-center w-100">
                            <button type="submit">
                            <p>Confirm</p>
                            <div class="top-left-square-point"></div>
                            <div class="bottom-right-square-point"></div>
                            </button>
                        </div>
                    </form>
                </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
