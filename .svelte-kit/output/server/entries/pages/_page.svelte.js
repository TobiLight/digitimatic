import { c as create_ssr_component, b as escape, n as null_to_empty, a as spread, e as escape_object, f as add_attribute, v as validate_component, h as each, d as subscribe } from "../../chunks/ssr.js";
import { i as isMenuOpen } from "../../chunks/index2.js";
const WorkWithUs_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "form.svelte-1ikekkg{--animate-duration:2s\n	}",
  map: null
};
const WorkWithUs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<section id="work-with-us" class="work-with-us bg-black border-t-2 border-gray-500 p-8 relative"><div class="bg-blak z-[0] relative opacity-80"><h1 class="text-green-500 font-bold text-center text-2xl" data-svelte-h="svelte-1y8winf">WORK WITH US</h1> <div class="w-[80px] mt-2 rounded-full h-1 mx-auto bg-green-500"></div> <form action="#" method="post" class="${escape(
    null_to_empty(`${"animate__animated animate__fadeOut"} relative z-[0] mt-10 flex flex-col justify-center w-full md:w-3/5 lg:w-3/6 mx-auto`),
    true
  ) + " svelte-1ikekkg"}"><div class="form-title md:mt-8" data-svelte-h="svelte-1utxaym"><h1 class="text-4xl text-white font-extrabold text-center">Get in touch with us.</h1></div> <div class="flex flex-row items-center gap-5 md:gap-4 mt-10" data-svelte-h="svelte-zv6g5z"><label for="fullname" class="w-full"><input type="text" placeholder="Full name" class="bg-white p-4 rounded-md text-black w-full"></label> <label for="phone" class="w-full"><input type="text" placeholder="Phone Number" class="bg-white p-4 rounded-md text-black w-full"></label></div> <div class="flex flex-row items-center gap-5 md:gap-4 mt-4" data-svelte-h="svelte-78lmmm"><label for="email" class="w-full"><input type="email" placeholder="Email Address" class="bg-white p-4 rounded-md text-black w-full"></label> <label for="company" class="w-full"><input type="text" placeholder="Company" class="bg-white p-4 rounded-md text-black w-full"></label></div> <div class="mt-4" data-svelte-h="svelte-nfcwx4"><textarea name="message" id="" cols="30" rows="5" class="w-full rounded-md p-4 bg-white" placeholder="How can we help you?"></textarea></div> <div class="flex justify-center mt-3" data-svelte-h="svelte-1hl07hq"><button class="w-auto rounded-md px-10 bg-green-500 hover:bg-green-700 text-white p-4 text-lg font-bold">Send now</button></div></form></div> </section>`;
});
const Bulb = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "1em" },
      { height: "1em" },
      { viewBox: "0 0 24 24" },
      escape_object($$props)
    ],
    {}
  )}><g fill="none"><path fill="currentColor" d="M12 7a5 5 0 0 0-2 9.584V19h4v-2.416A5.001 5.001 0 0 0 12 7z"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12h1m-3.5-6.5l1-1M12 3V2M5.5 5.5l-1-1M3 12H2m8 10h4m3-10a5 5 0 1 0-7 4.584V19h4v-2.416A5.001 5.001 0 0 0 17 12z"></path></g></svg>`;
});
const Handshake = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "1.25em" },
      { height: "1em" },
      { viewBox: "0 0 640 512" },
      escape_object($$props)
    ],
    {}
  )}><path fill="currentColor" d="m323.4 85.2l-96.8 78.4c-16.1 13-19.2 36.4-7 53.1c12.9 17.8 38 21.3 55.3 7.8l99.3-77.2c7-5.4 17-4.2 22.5 2.8s4.2 17-2.8 22.5L373 188.8l139 128V128h-.7l-3.9-2.5L434.8 79c-15.3-9.8-33.2-15-51.4-15c-21.8 0-43 7.5-60 21.2zm22.8 124.4l-51.7 40.2c-31.5 24.6-77.2 18.2-100.8-14.2c-22.2-30.5-16.6-73.1 12.7-96.8l83.2-67.3c-11.6-4.9-24.1-7.4-36.8-7.4C234 64 215.7 69.6 200 80l-72 48v224h28.2l91.4 83.4c19.6 17.9 49.9 16.5 67.8-3.1c5.5-6.1 9.2-13.2 11.1-20.6l17 15.6c19.5 17.9 49.9 16.6 67.8-2.9c4.5-4.9 7.8-10.6 9.9-16.5c19.4 13 45.8 10.3 62.1-7.5c17.9-19.5 16.6-49.9-2.9-67.8l-134.2-123zM16 128c-8.8 0-16 7.2-16 16v208c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32V128H16zm32 192a16 16 0 1 1 0 32a16 16 0 1 1 0-32zm496-192v224c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32V144c0-8.8-7.2-16-16-16h-80zm32 208a16 16 0 1 1 32 0a16 16 0 1 1-32 0z"></path></svg>`;
});
const Gear = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "1em" },
      { height: "1em" },
      { viewBox: "0 0 15 15" },
      escape_object($$props)
    ],
    {}
  )}><path fill="currentColor" d="M6.026 7.5c0-.827.66-1.5 1.473-1.5c.813 0 1.473.673 1.473 1.5S8.312 9 7.499 9c-.813 0-1.473-.673-1.473-1.5Z"></path><path fill="currentColor" fill-rule="evenodd" d="M5.568 0h3.86l.164.837V.84l.27 1.335c.383.172.74.386 1.068.627l1.345-.458l.796-.251l.417.727l1.087 1.854l.425.743l-.633.563l-1.009.874c.032.197.061.418.061.646c0 .228-.03.45-.06.646l1.012.878l.629.559l-.428.748l-1.084 1.849l-.417.73l-.807-.258l-1.334-.454a5.877 5.877 0 0 1-1.068.627l-.27 1.335v.003L9.43 15H5.57l-.163-.839l-.27-1.336a5.877 5.877 0 0 1-1.068-.627l-1.343.457l-.799.255l-.415-.73l-1.088-1.855L0 9.583l.632-.563l1.008-.875a4.075 4.075 0 0 1-.06-.645c0-.227.03-.45.061-.645l-1.014-.88L0 5.418l.426-.748l1.085-1.85l.415-.728l.808.256l1.334.454a5.875 5.875 0 0 1 1.068-.627l.27-1.337L5.568 0ZM7.5 5C6.144 5 5.045 6.12 5.045 7.5s1.1 2.5 2.454 2.5c1.355 0 2.454-1.12 2.454-2.5S8.853 5 7.5 5Z" clip-rule="evenodd"></path></svg>`;
});
const WhoAreWe = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section id="who-we-are" class="who-are-we px-8 py-16 bg-black text-white">${``} <div class="mt-16 text-left overflow-hidden"><div${add_attribute(
    "class",
    "ml-auto grid gap-4 animate__animated animate__fadeOutLeft",
    0
  )}>${validate_component(Handshake, "Handshake").$$render(
    $$result,
    {
      class: "w-14 h-14 md:w-28 md:h-28 text-gray-500"
    },
    {},
    {}
  )} <h1 class="text-4xl text-gray-500 sm:text-7xl md:text-[90px] font-bold md:leading-[90px] tracking-wider" data-svelte-h="svelte-1upcbio">The shortcut to instant digital influence.</h1></div> <p${add_attribute(
    "class",
    "mt-6 text-base sm:text-xl md:text-2xl md:w-3/5 animate__animated animate__fadeOutLeft",
    0
  )}>Crafting unforgettable brand identities for emerging businesses,
			inspiring trailblazers for aspiring entrepreneurs, and empowering
			social media personalities for everyday users of online platforms.
			Digitimatic is a premier publicity company that specializes in
			delivering effective messaging solutions for businesses and
			individuals seeking to reach a wider audience.</p></div> <div class="mt-16 text-right border-t-2 border-gray-500 pt-12 overflow-hidden"><div${add_attribute(
    "class",
    "ml-auto grid gap-4 animate__animated animate__fadeOutRight",
    0
  )}>${validate_component(Bulb, "Bulb").$$render(
    $$result,
    {
      class: "w-14 h-14 md:w-28 md:h-28 ml-auto text-gray-500"
    },
    {},
    {}
  )} <h1 class="text-gray-500 text-4xl sm:text-7xl md:text-[5.6rem] font-bold md:leading-[90px] tracking-wider" data-svelte-h="svelte-121ad6m">Understanding Consumer Buying Behavior</h1></div> <p${add_attribute(
    "class",
    "mt-6 text-base sm:text-xl md:text-2xl md:w-3/5 ml-auto animate__animated animate__fadeOutRight",
    0
  )}>In today&#39;s market, buyers are not only astute but also highly self
			aware. Our mission is to assist you in effortlessly captivating
			customers by positioning you as the unmistakable choice, utilizing
			the power of subconscious selling</p></div> <div class="mt-16 text-left overflow-hidden"><div id="about-3"${add_attribute(
    "class",
    "ml-auto grid gap-4 border-t-2 border-gray-500 pt-12 animate__animated animate__fadeOutLeft",
    0
  )}>${validate_component(Gear, "Gear").$$render(
    $$result,
    {
      class: "w-14 h-14 md:w-28 md:h-28 text-gray-500"
    },
    {},
    {}
  )} <h1 class="text-4xl text-gray-500 sm:text-7xl md:text-[90px] font-bold md:leading-[90px] tracking-wider" data-svelte-h="svelte-1vinqp7">Efficiency and Accountability.</h1></div> <p${add_attribute(
    "class",
    "mt-6 text-base sm:text-xl md:text-2xl md:w-3/5 animate__animated animate__fadeOutLeft",
    0
  )}>We will assume responsibility for securing the media coverage
			outlined in our plan. Our objective is to surpass the promised
			deliverables while ensuring a seamless and hassle free experience
			through our &#39;hands-off&#39; approach.</p></div></section>`;
});
const Clients_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "#clients.svelte-i4fa54{--animate-duration:2.5s\n	}",
  map: null
};
const Clients = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<section class="bg-black p-14 text-white"><div${add_attribute(
    "class",
    `${"animate__animated animate__fadeOut"}`,
    0
  )}><h1 class="text-center text-4xl font-bold text-green-500" data-svelte-h="svelte-1lqxlfe">SIGNIFICANT ASSOCIATION</h1> <div id="clients" class="w-[80px] mt-2 rounded-full h-1 mx-auto bg-green-500 svelte-i4fa54"></div> <div class="grid mt-8 justify-center gap-6 items-center w-full" data-svelte-h="svelte-1adm55s"><p class="mb-6 text-center md:text-xl md:w-3/6 mx-auto">We take pride in our vast database, consisting of more than
				1,000 esteemed news organizations that have established
				familiarity with our brand and expertise. This invaluable
				resource empowers us to provide our customers with an unwavering
				commitment to exceptional service, ensuring an impressive 99.9%
				service reliability</p> <div class="md:hdden grid gap-y-4"><div class="grid grid-cols-3 justify-center gap-3 md:w-5/12 md:mx-auto items-center"><figure class="flex-none w-auto h-auto relative bg-gradient-to-r from-gray-200 to-gray-500 rounded-md"><img src="https://digitimatic.com/wp-content/uploads/2023/12/forbes-1.png" alt="Forbes" class="inset-0 w-fit h-auto mx-auto object-cover rounded-lg" loading="lazy"></figure> <figure class="flex-none w-auto h-auto relative bg-white rounded-md"><img src="https://digitimatic.com/wp-content/uploads/2023/12/dailymail.png" alt="Daily Mail" class="inset-0 w-fit h-auto object-cover rounded-lg" loading="lazy"></figure> <figure class="flex-none w-auto h-auto relative rounded-md"><img src="https://digitimatic.com/wp-content/uploads/2023/12/yahoo.png" alt="Yahoo" class="inset-0 w-fit h-auto object-cover rounded-lg" loading="lazy"></figure></div> <div class="grid grid-cols-3 justify-center gap-3 md:w-5/12 md:mx-auto items-center"><figure class="flex-none w-auto h-auto relative bg-gradient-to-r from-sky-500 to-indigo-500 rounded-md"><img src="https://digitimatic.com/wp-content/uploads/2023/12/digital_journal-1.png" alt="Digital Journal" class="inset-0 w-fit h-auto mx-auto object-cover rounded-lg" loading="lazy"></figure> <figure class="flex-none w-auto h-auto relative bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md"><img src="https://digitimatic.com/wp-content/uploads/2023/12/bloomberg-1.png" alt="Bloomberg" class="inset-0 w-fit h-auto mx-auto object-cover rounded-lg" loading="lazy"></figure> <figure class="flex-none w-auto h-auto relative bg-gradient-to-r from-gray-500 to-white rounded-md"><img src="https://digitimatic.com/wp-content/uploads/2023/12/marketwatch.png" alt="" class="inset-0 w-fit h-auto mx-auto object-cover rounded-lg" loading="lazy"></figure></div> <div class="grid grid-cols-3 gap-3 md:w-5/12 md:mx-auto items-center"><div class="flex-none w-auto h-auto relative rounded-md"><img src="https://digitimatic.com/wp-content/uploads/2023/12/laweekly.jpg" alt="LA Weekly" class="inset-0 w-fit h-auto mx-auto object-cover rounded-lg" loading="lazy"></div> <div class="flex-none w-auto h-auto relative bg-gradient-to-r from-green-200 to-blue-300 rounded-md"><img src="https://digitimatic.com/wp-content/uploads/2023/12/variety.png" alt="Variety" class="inset-0 w-fit h-auto mx-auto object-cover rounded-lg" loading="lazy"></div> <div class="flex-none w-auto h-auto relative bg-gradient-to-r from-gray-200 to-gray-500 rounded-md"><img src="https://digitimatic.com/wp-content/uploads/2023/12/benzinga-1.png" alt="Benzinga" class="inset-0 w-fit h-auto mx-auto object-cover rounded-lg" loading="lazy"></div></div> <div class="grid grid-cols-3 gap-3 md:w-5/12 md:mx-auto items-center"><div class="flex-none w-auto h-auto bg-gradient-to-r from-orange-200 to-red-300 relative rounded-md"><img src="https://digitimatic.com/wp-content/uploads/2023/12/gq-1.png" alt="GQ" class="inset-0 w-auto h-auto mx-auto object-cover rounded-lg" loading="lazy"></div> <div class="flex-none w-auto h-auto relative rounded-md"><img src="https://digitimatic.com/wp-content/uploads/2023/12/newyorkpost-1.png" alt="New York Post" class="inset-0 w-fit h-auto mx-auto object-cover rounded-lg" loading="lazy"></div> <div class="flex-none w-auto h-auto relative bg-white rounded-md"><img src="https://digitimatic.com/wp-content/uploads/2023/12/nasdaq.jpg" alt="Nasdaq" class="inset-0 w-fit h-auto mx-auto object-cover rounded-lg" loading="lazy"></div></div> <div class="grid grid-cols-2 gap-3 md:w-4/12 md:mx-auto items-center"><div class="flex-none w-auto h-auto px-3 relative bg-white rounded-md"><img src="https://digitimatic.com/wp-content/uploads/2023/12/entrepreneur.png" alt="Entrepreneur" class="inset-0 w-fit h-auto mx-auto object-cover rounded-lg" loading="lazy"></div> <div class="flex-none w-auto h-auto relative rounded-md"><img src="https://digitimatic.com/wp-content/uploads/2023/12/adweek-1.png" alt="ADWEEK" class="inset-0 w-fit h-auto mx-auto object-cover rounded-lg" loading="lazy"></div></div></div></div></div> </section>`;
});
const Graph = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "1em" },
      { height: "1em" },
      { viewBox: "0 0 24 24" },
      escape_object($$props)
    ],
    {}
  )}><path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM8 17c-.55 0-1-.45-1-1v-5c0-.55.45-1 1-1s1 .45 1 1v5c0 .55-.45 1-1 1zm4 0c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v8c0 .55-.45 1-1 1zm4 0c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1z"></path></svg>`;
});
const Slide_svelte_svelte_type_style_lang = "";
const css = {
  code: '.slider.svelte-149wx1q{position:relative;width:100%}.slide.svelte-149wx1q{position:absolute;inset:0;display:flex;justify-content:center;color:#fff;font-family:system-ui,\n			-apple-system,\n			BlinkMacSystemFont,\n			"Segoe UI",\n			Roboto,\n			Oxygen,\n			Ubuntu,\n			Cantarell,\n			"Open Sans",\n			"Helvetica Neue",\n			sans-serif;font-weight:200}.next.svelte-149wx1q,.prev.svelte-149wx1q{position:absolute;z-index:0;top:50%;transform:translateY(-50%);border:1px solid #fff;color:#fff;padding:4px 10px;cursor:pointer}.next.svelte-149wx1q{right:-30px}.prev.svelte-149wx1q{left:-30px}.nav.svelte-149wx1q{bottom:20px;left:0;right:0;height:100px;z-index:3;display:flex;justify-content:space-evenly;align-items:center}.bubble.svelte-149wx1q{padding:0;border:0;height:20px;width:10px;border-radius:100px;transition:all 0.3s ease-out;opacity:0.2;cursor:pointer}.current.svelte-149wx1q{height:80px;opacity:0.8}.onedown.svelte-149wx1q,.oneup.svelte-149wx1q{height:60px}.twodown.svelte-149wx1q,.twoup.svelte-149wx1q{height:40px}',
  map: null
};
const Slide = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { duration } = $$props;
  let { slides } = $$props;
  let currentSlide = 0;
  const nextSlide = () => {
    currentSlide++;
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
    timer();
  };
  let interval;
  const timer = () => {
    clearInterval(interval);
    interval = setInterval(nextSlide, duration);
  };
  timer();
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  if ($$props.slides === void 0 && $$bindings.slides && slides !== void 0)
    $$bindings.slides(slides);
  $$result.css.add(css);
  return `<div class="${escape(null_to_empty(`${currentSlide === 1 ? "h-[370px] mb-8" : "h-[300px] mb-4"} slider relative md:h-fit`), true) + " svelte-149wx1q"}"><div class="slide svelte-149wx1q">${each(slides, (slider, i) => {
    return `${currentSlide === i ? `<div class="${escape(null_to_empty(`slid absolute p-3 rounded-md`), true) + " svelte-149wx1q"}"><blockquote class="p-3 text-sm bg-[#222] h-auto">${escape(slider.testimonial)}</blockquote> <p class="${escape(null_to_empty(`w-auto font-bold text-right mt-4`), true) + " svelte-149wx1q"}">- ${escape(slider.name)}</p> </div>` : ``}`;
  })}  <button class="prev bg-[#2e2e2e] border rounded-full svelte-149wx1q">${escape("<")}</button> <button class="next bg-[#2e2e2e] border rounded-full px-3 py-1 z-[2] cursor-pointer svelte-149wx1q">${escape(">")}</button> </div> <div class="nav svelte-149wx1q">${each(slides, (slider, i) => {
    return `<button class="${[
      "bubble svelte-149wx1q",
      (i === currentSlide ? "current" : "") + " " + (i === currentSlide - 1 ? "onedown" : "") + " " + (i === currentSlide - 2 ? "twodown" : "") + " " + (i === currentSlide + 1 ? "oneup" : "") + " " + (i === currentSlide + 2 ? "twoup" : "")
    ].join(" ").trim()}"></button>`;
  })}</div> </div>`;
});
const Testimonials = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const clients = [
    {
      name: "Sergey Grybniak",
      testimonial: "Sergey Grybniak is a data-driven entrepreneur who had a vision of what he wanted for his brand and himself. Having built 3 successful businesses across 3 different industries, he knew he needed the right PR to get more eyeballs on his enterprise. He came to us, we went to work immediately starting with getting him author accounts on major publications mixed with a few features. With our services, Sergey has been able to command over $1M worth of business for his agency and successfully sold out his ICO."
    },
    {
      name: "Guy Sheetrit",
      testimonial: "We worked with Guy to help him establish a strong online presence by securing multiple features for him on various news outlets and optimizing his bio for lead generation. These features and author accounts helped him gain credibility and visibility among potential clients also positioning him as a reputable and knowledgeable entrepreneur and marketing expert. Guy Sheetrit Using our services, Guy was able to establish himself as a leading authority in industries he’s active in, attracting more clients and opportunities for his businesses. He has been recognized as one of the top SEO experts to follow by Inc Magazine, He has also been featured among promising entrepreneurs to watch for in the Daily Mail"
    },
    {
      name: "Open Head NFT",
      testimonial: "Open Head NFT came into the crypto space with a unique offering of on-chain raffles which means full transparency in the selection process. Loot boxes to win over $100 ETH and passive staking. The founder knew he had a unicorn and came to us to ensure Open Head is a success, with placements in major US publications. Within 48hrs of our campaign, open-head nft discord gained over 10k active users and went on to sell out with over 60 ETH in volume."
    },
    {
      name: "Altura NFT",
      testimonial: "Altura, a leading platform for Web3 game developers was in need of eyes balls to see their unique offer and came to us. With a mutual understanding, we went to work and got them a few features on International Business Times, BeinCrypto, and Yahoo to mention a few. Altura currently powers the following next generation of gaming such as Animera, Haunted Space, etc. Currently, Altura has transacted $3.9M in total marketplace volume and boasts of over 44k unique marketplace users."
    }
  ];
  return `<section id="testimonials" class="success-stories bg-black p-8 py-20 text-white relative"><div${add_attribute(
    "class",
    `${"animate__animated animate__fadeOutLeft"} heading flex flex-col sm:flex sm:flex-row text-center sm:text-left items-center gap-4 md:w-3/4 lg:w-3/4 pb-6 relative z-[0]`,
    0
  )}><div class="flex items-center lg:items-end gap-3 rounded-full border border-green-500 p-4">${validate_component(Graph, "Graph").$$render($$result, { class: "text-green-500 w-32 h-32" }, {}, {})}</div> <div class="grid gap-2" data-svelte-h="svelte-1n7s7ag"><h1 class="text-4xl text-green-500 md:text-6xl lg:text-7xl font-extrabold">Success Stories</h1> <p class="text-xl sm:text-2xl">Recognizing the strength of your business is important, but when
				others acknowledge and hold it in high regard, it becomes a game
				changer.</p></div></div>  <div class="mt-8 mb-8 md:mb-16 md:mt-32 grid gap-8 px-2 md:w-3/6 mx-auto relative max-h-[620px]">${validate_component(Slide, "Slide").$$render($$result, { duration: 5e3, slides: clients }, {}, {})} </div> </section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_isMenuOpen;
  $$unsubscribe_isMenuOpen = subscribe(isMenuOpen, (value) => value);
  $$unsubscribe_isMenuOpen();
  return `${$$result.head += `<!-- HEAD_svelte-46uu7e_START -->${$$result.title = `<title>Digitimatic</title>`, ""}<!-- HEAD_svelte-46uu7e_END -->`, ""} <main id="main-page" class="min-h-screen mt-[112px] md:mt-[157px]"><section class="max-h-[700px] w-full bg-black bg-fixed bg-[url('https://digitimatic.com/wp-content/uploads/2023/12/bg-scaled.jpg')]" data-svelte-h="svelte-3wc4cp"><div class="p-4 h-[400px] md:h-[700px] flex flex-col justify-center opacity-70 bg-back"><h1 class="text-white text-5xl sm:text-6xl leading-[initial] sm:leading-normal md:text-[90px] font-bold md:leading-[initial] sm:ml-8">High Quality Media Coverage</h1> <div class="text-white w-3/4 my-8 text-lg md:text-2xl sm:ml-8"><p>We have honed the publication process to the very last
					detail. Putting an emphasis on efficiency and simplicity
					without compromising quality.</p></div></div> <div class="grid grid-cols-5"><div class="bg-green-500 p-1"></div> <div class="bg-yellow-500 p-1"></div> <div class="bg-orange-500 p-1"></div> <div class="bg-red-500 p-1"></div> <div class="bg-gray-500 p-1"></div></div></section> ${validate_component(WhoAreWe, "WhoAreWe").$$render($$result, {}, {}, {})} <hr class="border-t-2 border-gray-600"> ${validate_component(Clients, "Clients").$$render($$result, {}, {}, {})} <hr class="border-t-2 border-gray-600"> ${validate_component(Testimonials, "Testimonials").$$render($$result, {}, {}, {})} <hr class="border-t-2 border-gray-600"> ${validate_component(WorkWithUs, "WorkWithUs").$$render($$result, {}, {}, {})}</main>`;
});
export {
  Page as default
};
