"use client";

import { useState } from "react";

const services = [
  {
    icon: "WM",
    image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=900&q=80",
    title: "Washing Machine Repair",
    priceLabel: "Visit cost Rs.199",
    detail: "Drain issue, drum noise, no spin, water leak, panel fault, and motor repair.",
  },
  {
    icon: "CH",
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=900&q=80",
    title: "Chimney Service",
    priceLabel: "Visit cost Rs.199",
    detail: "Deep cleaning, low suction, filter replacement, motor service, and duct cleaning.",
  },
  {
    icon: "AC",
    image: "https://images.unsplash.com/photo-1581092160607-ee22731c2c03?auto=format&fit=crop&w=900&q=80",
    title: "AC Repair & Service",
    priceLabel: "Visit cost Rs.199",
    detail: "Low cooling, gas check, leak repair, PCB fault, indoor cleaning, and installation.",
  },
  {
    icon: "MW",
    image: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?auto=format&fit=crop&w=900&q=80",
    title: "Microwave Repair",
    priceLabel: "Visit cost Rs.199",
    detail: "Heating issue, plate rotation, keypad, fuse, door switch, and power problem.",
  },
  {
    icon: "GY",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=900&q=80",
    title: "Geyser & Purifier",
    priceLabel: "Visit cost Rs.199",
    detail: "Heating, leakage, filter, service, installation, and annual maintenance support.",
  },
];

const highlights = [
  ["12+", "Years experience"],
  ["18k+", "Happy customers"],
  ["60 min", "Fast response"],
  ["90 days", "Repair warranty"],
];

const features = [
  "Verified technicians",
  "Transparent estimate",
  "Genuine spare parts",
  "Clean work guarantee",
];

const bookingSteps = [
  "Share appliance issue",
  "Get confirmed visit time",
  "Approve repair estimate",
  "Final testing before payment",
];

const reviews = [
  {
    name: "Ramesh Kumar",
    area: "Kukatpally",
    rating: "5/5",
    text: "Technician came on time and fixed my washing machine drain issue neatly. Price was explained before repair.",
  },
  {
    name: "Priya Reddy",
    area: "Madhapur",
    rating: "5/5",
    text: "Very professional chimney cleaning service. They cleaned the kitchen area after the work also.",
  },
  {
    name: "Sandeep Rao",
    area: "Ameerpet",
    rating: "5/5",
    text: "AC was not cooling properly. They checked everything, explained the problem, and completed the service quickly.",
  },
  {
    name: "Anusha Devi",
    area: "Secunderabad",
    rating: "5/5",
    text: "Good response on WhatsApp and the technician reached in the promised time slot. Smooth experience.",
  },
  {
    name: "Vikram Singh",
    area: "Begumpet",
    rating: "5/5",
    text: "Microwave repair was handled carefully. No extra charges were added without asking.",
  },
  {
    name: "Meena Joseph",
    area: "Gachibowli",
    rating: "5/5",
    text: "Geyser service was clean and fast. I liked the clear Rs.199 visit cost communication.",
  },
];

const whatsappNumber = "919347584923";
const whatsappBaseUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}`;
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://nvk-webiste.vercel.app";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "NKV Enterprises",
  alternateName: [
    "NVK Enterprises",
    "NVK Enterprices",
    "NKV Enterprices",
    "nvk enterprices",
    "NKV Appliance Repair",
  ],
  url: siteUrl,
  telephone: "+919347584923",
  priceRange: "Rs.199 visit cost",
  image: `${siteUrl}/opengraph-image`,
  description:
    "NKV Enterprises provides doorstep home appliance repair for washing machines, chimneys, ACs, microwaves, geysers, purifiers, and refrigerators.",
  areaServed: [
    "Hyderabad",
    "Secunderabad",
    "Kukatpally",
    "Madhapur",
    "Ameerpet",
    "Begumpet",
    "Gachibowli",
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "10:00",
      closes: "21:00",
    },
  ],
  makesOffer: services.map((service) => ({
    "@type": "Offer",
    name: service.title,
    price: "199",
    priceCurrency: "INR",
    description: service.detail,
  })),
};

function getWhatsappUrl(message?: string) {
  if (!message) {
    return whatsappBaseUrl;
  }

  return `${whatsappBaseUrl}&text=${encodeURIComponent(message)}`;
}

export default function Home() {
  const [toastMessage, setToastMessage] = useState("");

  function buildWhatsappMessage(form: HTMLFormElement) {
    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const phone = String(formData.get("customerPhone") || "").trim();
    const appliance = String(formData.get("appliance") || "").trim();
    const visitDate = String(formData.get("visitDate") || "").trim();
    const visitTime = String(formData.get("visitTime") || "").trim();
    const message = String(formData.get("message") || "").trim();

    return [
      "New service request for NKV Enterprises",
      "",
      `Name: ${name || "Not provided"}`,
      `Mobile: ${phone || "Not provided"}`,
      `Appliance: ${appliance || "Not selected"}`,
      `Preferred date: ${visitDate || "Not selected"}`,
      `Preferred time: ${visitTime || "Not selected"}`,
      `Problem: ${message || "Not provided"}`,
    ].join("\n");
  }

  function handleBookingSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const text = buildWhatsappMessage(event.currentTarget);
    const whatsappUrl = getWhatsappUrl(text);

    setToastMessage("Request ready. Opening WhatsApp...");
    window.location.href = whatsappUrl;
  }

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {toastMessage ? (
        <div className="toast" role="status" aria-live="polite">
          <span>OK</span>
          {toastMessage}
        </div>
      ) : null}

      <div className="topStrip">
        <span>Doorstep repair service available daily, 10 AM - 9 PM</span>
        <a href="tel:+919347584923">+91 93475 84923</a>
      </div>

      <header className="siteHeader">
        <a className="brand" href="#home" aria-label="NKV Enterprises">
          <span className="brandMark">NK</span>
          <span>
            <strong>NKV Enterprises</strong>
            <small>Home appliance experts</small>
          </span>
        </a>

        <nav aria-label="Main navigation">
          <a href="#services">Services</a>
          <a href="#why">Why us</a>
          <a href="#reviews">Reviews</a>
          <a href="#process">Process</a>
          <a href="#contact">Book</a>
        </nav>

        <a className="navButton" href={getWhatsappUrl("Hello NKV Enterprises, I need appliance repair service.")}>
          WhatsApp
        </a>
      </header>

      <section className="hero" id="home">
        <div className="heroCopy">
          <p className="eyebrow">NKV Enterprises appliance repair</p>
          <h1>NKV Enterprises home appliance repair with fast visits and clear pricing.</h1>
          <p className="heroText">
            Washing machine repair, chimney repair and cleaning, AC service,
            microwave repair, geyser repair, water purifier service, and fridge
            repair by trained technicians. Every visit starts at Rs.199.
          </p>

          <div className="heroActions">
            <a className="primaryButton" href="#contact">
              Book a Technician
            </a>
            <a className="secondaryButton" href="tel:+919347584923">
              Call Now
            </a>
          </div>

          <div className="featureLine" aria-label="Service benefits">
            {features.map((feature) => (
              <span key={feature}>{feature}</span>
            ))}
          </div>
        </div>

        <div className="heroPanel" aria-label="Service booking summary">
          <div className="photoFrame" />
          <div className="bookingCard">
            <span className="liveDot">Available 10 AM - 9 PM</span>
            <h2>Book repair visit</h2>
            <p>Technician support for home appliances with Rs.199 visit cost.</p>
            <div className="miniList">
              <span>Washing Machine</span>
              <span>Chimney</span>
              <span>AC Service</span>
            </div>
          </div>
        </div>
      </section>

      <section className="statsBand" aria-label="Company numbers">
        {highlights.map(([value, label]) => (
          <div key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      <section className="section" id="services">
        <div className="sectionHeader">
          <div>
            <p className="eyebrow">Our services</p>
            <h2>Repair support for the appliances you use every day.</h2>
          </div>
          <p>
            NKV Enterprises repairs washing machines, kitchen chimneys, ACs,
            microwaves, geysers, water purifiers, refrigerators, and other home
            appliances with diagnosis, price confirmation, careful repair, and
            final testing before the job is closed.
          </p>
        </div>

        <div className="serviceGrid">
          {services.map((service) => (
            <article className="serviceCard" key={service.title}>
              <div
                aria-label={service.title}
                className="serviceImage"
                style={{ backgroundImage: `url(${service.image})` }}
              >
                <span className="serviceIcon">{service.icon}</span>
              </div>
              <div className="serviceContent">
                <span className="servicePrice">{service.priceLabel}</span>
                <h3>{service.title}</h3>
                <p>{service.detail}</p>
                <a href="#contact">Book service</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="whySection" id="why">
        <div className="whyImage" aria-hidden="true" />
        <div className="whyCopy">
          <p className="eyebrow">Why choose us</p>
          <h2>Professional work, respectful technicians, no surprise charges.</h2>
          <p>
            We keep the repair visit simple: inspect first, explain clearly,
            quote honestly, and leave the appliance tested and ready.
          </p>
          <div className="checkGrid">
            {features.map((feature) => (
              <span key={feature}>{feature}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="reviewsSection" id="reviews">
        <div className="sectionHeader">
          <div>
            <p className="eyebrow">Customer reviews</p>
            <h2>Trusted by families for quick, clean appliance service.</h2>
          </div>
          <p>
            Real service experience depends on punctual visits, honest estimates,
            and technicians who leave the appliance tested before they go.
          </p>
        </div>

        <div className="reviewGrid">
          {reviews.map((review) => (
            <article className="reviewCard" key={review.name}>
              <div className="reviewTop">
                <span className="reviewAvatar">
                  {review.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")
                    .slice(0, 2)}
                </span>
                <div>
                  <strong>{review.name}</strong>
                  <small>{review.area}</small>
                </div>
                <span className="reviewRating">{review.rating}</span>
              </div>
              <p>{review.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="processSection" id="process">
        <div className="sectionHeader compact">
          <div>
            <p className="eyebrow">Easy booking</p>
            <h2>Four simple steps from call to repair.</h2>
          </div>
        </div>
        <ol className="processGrid">
          {bookingSteps.map((item, index) => (
            <li key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{item}</strong>
            </li>
          ))}
        </ol>
      </section>

      <section className="contactSection" id="contact">
        <div className="contactPanel">
          <p className="eyebrow">Request callback</p>
          <h2>Tell us what needs repair.</h2>
          <p>
            Add your appliance and issue. The team will call back to confirm the
            visit slot and technician availability.
          </p>
          <div className="contactMeta">
            <span>Open daily: 10 AM - 9 PM</span>
            <span>Visit cost: Rs.199</span>
          </div>
        </div>

        <form className="contactForm" onSubmit={handleBookingSubmit}>
          <label>
            Full name
            <input name="name" placeholder="Enter your name" required type="text" />
          </label>
          <label>
            Mobile number
            <input
              name="customerPhone"
              placeholder="+91 mobile number"
              required
              type="tel"
            />
          </label>
          <label>
            Appliance
            <select name="appliance" defaultValue="" required>
              <option value="" disabled>
                Choose service
              </option>
              <option>Washing Machine</option>
              <option>Kitchen Chimney</option>
              <option>Air Conditioner</option>
              <option>Microwave</option>
              <option>Geyser & Purifier</option>
              <option>Other Appliance</option>
            </select>
          </label>
          <div className="formPair">
            <label>
              Preferred date
              <input name="visitDate" required type="date" />
            </label>
            <label>
              Preferred time
              <input name="visitTime" required type="time" />
            </label>
          </div>
          <label>
            Problem details
            <textarea name="message" placeholder="Describe the issue" required rows={4} />
          </label>
          <button type="submit">Send on WhatsApp</button>
        </form>
      </section>

      <footer>
        <div>
          <strong>NKV Enterprises</strong>
          <span>Professional home appliance repair service in Hyderabad and Secunderabad</span>
        </div>
        <a href="tel:+919347584923">+91 93475 84923</a>
      </footer>
    </main>
  );
}
