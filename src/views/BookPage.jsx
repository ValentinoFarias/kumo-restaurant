"use client";

import { useState } from "react";
import HeroVideo from "../components/HeroVideo";
import NavBar from "../components/NavBar";

const DAYS = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const LUNCH = ["11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30"];
const DINNER = ["16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30"];

function buildGrid(year, month) {
  const days = new Date(year, month + 1, 0).getDate();
  const raw = new Date(year, month, 1).getDay();
  const offset = raw === 0 ? 6 : raw - 1; // Monday = 0
  const cells = [...Array(offset).fill(null), ...Array.from({ length: days }, (_, i) => i + 1)];
  while (cells.length % 7 !== 0) cells.push(null);
  return cells;
}

export default function BookPage() {
  const today = new Date();

  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());
  const [selectedDate, setSelectedDate] = useState(null);
  const [persons, setPersons] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const cells = buildGrid(year, month);

  function prevMonth() {
    if (month === 0) { setMonth(11); setYear(y => y - 1); }
    else setMonth(m => m - 1);
    setSelectedDate(null);
  }

  function nextMonth() {
    if (month === 11) { setMonth(0); setYear(y => y + 1); }
    else setMonth(m => m + 1);
    setSelectedDate(null);
  }

  function isPast(day) {
    const d = new Date(year, month, day);
    const now = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    return d < now;
  }

  const bigGroup = persons === "6";
  const canBook = selectedDate && persons && !bigGroup && time && name && email;

  const summaryLabel = selectedDate
    ? `${MONTH_NAMES[month]} ${selectedDate}, ${year}${time ? ` · ${time}` : ""}${persons && !bigGroup ? ` · ${persons} ${persons === "1" ? "person" : "people"}` : ""}`
    : null;

  return (
    <div className="book">
      <HeroVideo page="home" videoSrc="/assets/video/hero-book.mp4" />
      <NavBar page="book" />

      <div className="book__canvas-shell">
        <div className="book__canvas">

          {/* Section heading */}
          <div className="book__heading">
            <p className="book__heading-jp">リザーブ</p>
            <p className="book__heading-en">Book a table</p>
          </div>

          {/* Booking: calendar + form */}
          <div id="calendar" className="book__booking">

            {/* Calendar */}
            <div className="book__cal-card">
              <div className="book__cal-header">
                <span className="book__cal-month">{MONTH_NAMES[month]} {year}</span>
                <div className="book__cal-nav">
                  <button className="book__cal-btn" onClick={prevMonth} aria-label="Previous month">
                    <img src="/assets/images/chevron-left.png" alt="" className="book__cal-chevron" />
                  </button>
                  <button className="book__cal-btn" onClick={nextMonth} aria-label="Next month">
                    <img src="/assets/images/chevron-right.png" alt="" className="book__cal-chevron" />
                  </button>
                </div>
              </div>

              <div className="book__cal-grid">
                {DAYS.map(d => (
                  <div key={d} className="book__cal-cell book__cal-cell--day">{d}</div>
                ))}
                {cells.map((day, i) => {
                  if (!day) return <div key={`e-${i}`} className="book__cal-cell" />;
                  const past = isPast(day);
                  const sel = selectedDate === day;
                  return (
                    <button
                      key={day}
                      disabled={past}
                      onClick={() => setSelectedDate(day)}
                      className={[
                        "book__cal-cell book__cal-cell--date",
                        sel && "book__cal-cell--selected",
                        past && "book__cal-cell--past",
                      ].filter(Boolean).join(" ")}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Confirmation */}
            {submitted && (
              <div className="book__form book__confirm">
                <p className="book__confirm-kanji">予</p>
                <p className="book__confirm-title-jp">予約完了</p>
                <p className="book__confirm-title-en">We'll be in touch shortly</p>
                <div className="book__confirm-divider" />
                <div className="book__confirm-details">
                  <p className="book__confirm-detail-row">
                    <span className="book__confirm-detail-label">Date</span>
                    <span>{MONTH_NAMES[month]} {selectedDate}, {year}</span>
                  </p>
                  <p className="book__confirm-detail-row">
                    <span className="book__confirm-detail-label">Time</span>
                    <span>{time}</span>
                  </p>
                  <p className="book__confirm-detail-row">
                    <span className="book__confirm-detail-label">Guests</span>
                    <span>{persons} people</span>
                  </p>
                  <p className="book__confirm-detail-row">
                    <span className="book__confirm-detail-label">Name</span>
                    <span>{name}</span>
                  </p>
                </div>
                <p className="book__confirm-msg">
                  A confirmation will be sent to <strong>{email}</strong>. We look forward to seeing you.
                </p>
                <p className="book__confirm-brand">雲ラーメン</p>
              </div>
            )}

            {/* Form */}
            {!submitted && (
            <form className="book__form" onSubmit={e => { e.preventDefault(); if (canBook) setSubmitted(true); }}>

              <div className="book__form-row">
                <div className="book__form-group">
                  <label className="book__form-label">Persons</label>
                  <select
                    className="book__form-select"
                    value={persons}
                    onChange={e => setPersons(e.target.value)}
                  >
                    <option value="" disabled>Select</option>
                    <option value="2">2 people</option>
                    <option value="3">3 people</option>
                    <option value="4">4 people</option>
                    <option value="5">5 people</option>
                    <option value="6">6+ people</option>
                  </select>
                  {bigGroup && (
                    <p className="book__form-callmsg">
                      For 6+ guests please call us —{" "}
                      <a href="tel:+441174560000">+44 117 456 0000</a>
                    </p>
                  )}
                </div>

                <div className="book__form-group">
                  <label className="book__form-label">Time</label>
                  <select
                    className="book__form-select"
                    value={time}
                    onChange={e => setTime(e.target.value)}
                  >
                    <option value="" disabled>Select</option>
                    <optgroup label="Lunch">
                      {LUNCH.map(t => <option key={t} value={t}>{t}</option>)}
                    </optgroup>
                    <optgroup label="Dinner">
                      {DINNER.map(t => <option key={t} value={t}>{t}</option>)}
                    </optgroup>
                  </select>
                </div>
              </div>

              <div className="book__form-group">
                <label className="book__form-label">Name</label>
                <input
                  className="book__form-input"
                  type="text"
                  placeholder="Your full name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </div>

              <div className="book__form-group">
                <label className="book__form-label">Email</label>
                <input
                  className="book__form-input"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>

              <div className="book__form-group">
                <label className="book__form-label">
                  Phone <span className="book__form-optional">(optional)</span>
                </label>
                <input
                  className="book__form-input"
                  type="tel"
                  placeholder="+44 ..."
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                />
              </div>

              <div className="book__form-group">
                <label className="book__form-label">
                  Notes <span className="book__form-optional">(optional)</span>
                </label>
                <textarea
                  className="book__form-textarea"
                  placeholder="Allergies, special occasions, accessibility needs..."
                  value={notes}
                  onChange={e => setNotes(e.target.value)}
                  rows={3}
                />
              </div>

              {summaryLabel && (
                <div className="book__form-summary">{summaryLabel}</div>
              )}

              <button
                type="submit"
                className="book__form-submit"
                disabled={!canBook}
              >
                <span className="book__form-submit-jp">予約する</span>
                Book Table
              </button>

            </form>
            )}
          </div>

          {/* Footer */}
          <footer className="book__footer">
            <div className="book__footer-contact">
              <div className="book__footer-col">
                <p className="book__footer-col-heading">restaurant</p>
                <div className="book__footer-col-body">
                  <p>3 frederick place</p>
                  <p>bs8 1as</p>
                  <p>bristol</p>
                  <p>uk</p>
                </div>
              </div>
              <div className="book__footer-col">
                <p className="book__footer-col-heading">opening hours</p>
                <div className="book__footer-col-body">
                  <p>monday to sunday</p>
                </div>
                <div className="book__footer-col-body book__footer-col-body--gap">
                  <p>11:30-15 &amp; 16-21</p>
                </div>
              </div>
              <div className="book__footer-col">
                <p className="book__footer-col-heading">contact</p>
                <div className="book__footer-col-body">
                  <p>hello@kumoramen.co.uk</p>
                </div>
              </div>
            </div>

            <div className="book__footer-logo-wrap">
              <img
                className="book__footer-logo"
                src="/assets/images/logoKumoFoot.png"
                alt="Kumo Ramen"
              />
              <p className="book__footer-brand-jp">雲ラーメン</p>
              <p className="book__footer-brand-en">kumo ramen</p>
            </div>
          </footer>

        </div>
      </div>
    </div>
  );
}
