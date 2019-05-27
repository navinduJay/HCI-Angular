export const configuration = {
  footer: {
    title: "Hotel Habibi",
    copyright: " © 2019 Human Computer Interface Project WE-01",
    address: "Visit us at: 77 Galle Rd, Colombo 00300 Sri Lanka"
  },

  auth: {
    question: "Don't Have an Account?",
    desc:
      "Make an account and make a reservation today! Join with us and feel the luxury!",
    button: {
      text: "Register Now",
      link: "/user/register"
    }
  },

  todo: {
    title: "Luxury at a glance!",
    environment: [
      { image: "../../../assets/images/room1.jpg", text: "Stay" },
      { image: "../../../assets/images/pool.jpg", text: "Relax" },
      { image: "../../../assets/images/dine.jpg", text: "Dine" }
    ]
  },
  contact: {
    title: "Contact Us",
    text: "Write your feedback!",
    form: {
      name: "Name",
      email: "Email",
      comment: "Comment",
      btn: "Submit"
    }
  },
  availability: {
    title: "Make a reservation today!",
    picture: "../../../assets/images/availability.svg",
    desc:
      "Looking for a luxury stay to spend your vacation? Then you are at the right place! Head on over to our rooms select your room as per your preference and make a reservation today!",
    button: {
      text: "Check Availability",
      link: ""
    }
  },
  why: {
    title: "Why Choose Us?",
    features: [
      {
        icon: "../../../assets/images/massage.svg",
        title: "Free Jet-lag Massage",
        desc:
          "Decrease the effects of Jet Lag with a Massage. Sit back and try."
      },
      {
        icon: "../../../assets/images/check.svg",
        title: "Early check-in & late check-out",
        desc:
          "This is another amenity we provie for you. Sit back and enjoy more."
      },
      {
        icon: "../../../assets/images/spa.png",
        title: "Offers For SPA Treatments",
        desc: "Offers for our customers for spa treatments. Enjoy with us."
      },
      {
        icon: "../../../assets/images/dine.svg",
        title: "Offers Lunch & Dinner",
        desc: "Offers for our customers for lunch and dinner. Enjoy with us."
      }
    ]
  },

  adminPanel: {
    dashboard: [
      {
        url: "h_config",
        image: "../../../../assets/images/conf.png",
        title: "Hotel Configuration",
        desc:
          "Edit room types, rooms, hall types, halls, amenities and house keeping status of the hotel.",
        btn: "Edit"
      },
      {
        url: "bookings",
        image: "../../../../assets/images/bookings.svg",
        title: "Bookings",
        desc:
          "To perform functions such as Edit bookings, check bookings, checkout a customer, extend bookings.",
        btn: "Edit"
      },
      {
        url: "menus",
        image: "../../../../assets/images/menu.svg",
        title: "Menus",
        desc:
          "Add menu items, delete and update menu items of the menu item list and view added menu items",
        btn: "Edit"
      },
      {
        url: "guests",
        image: "../../../../assets/images/guests.svg",
        title: "Guests",
        desc:
          "To perform functions such as adding a guest, edit guest(booked) information, ban guests and remove guests",
        btn: "Edit"
      },
      {
        url: "edit_profile",
        image: "../../../../assets/images/admin97.png",
        title: "Profile",
        desc:
          "To manage admin profile details by editing admin profile and can view edited admin profile",
        btn: "Edit"
      },

      {
        url: "calendar",
        image: "../../../../assets/images/calendar.svg",
        title: "Availability Calendar",
        desc:
          "To perform functions such as adding events to calendar and view them as per their requirement",
        btn: "Edit"
      }
    ]
  }
};
