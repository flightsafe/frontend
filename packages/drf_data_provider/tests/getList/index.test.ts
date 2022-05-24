import axios from "axios";

import DrfServer from "../../src/index";
import nock from "nock";

const sampleData: any = {
  next: "http://0.0.0.0:8000/plane/plane/?page=2",
  previous: null,
  count: 20,
  currentPage: 1,
  totalPage: 2,
  results: [
    {
      id: 1,
      name: "Airbus A320neo",
      description: "neo",
      image: "http://0.0.0.0:8000/files/Airbus20A320neo.jpg",
      created_time: "2022-05-24T12:22:24.869911Z",
      updated_time: "2022-05-24T12:22:24.869929Z",
    },
    {
      id: 2,
      name: "Aviat Pitts Special S-1S",
      description:
        "The Pitts Special is a family of light single-engine aerobatic biplanes created by Curtis Pitts that first flew in September of 1944. The line consists of two primary variants, the single-seat 5-1 and the tandem two-seat S-2. Pitts Specials are renowned for their ability to perform incredibly intricate maneuvers with great precision, including high-g aerobatics. A number of world records have been set in the aircraft type, including for an inverted flat spin.Pitts Special biplanes are small: the length of the 5-1 is 15 ft 6 in (4.72 m) and the S-2 is 18 ft 9 in (5.72 m). The aircraft have a swept upper wing and a straight lower, with the 5-1 having a 17 ft 4 in (5.28 m) upper wingspan and the S-2 a 20 ft (6.10 m) upper wingspan. Each is a taildragger with standard tail units and are powered by horizontally opposed \"flat\" engines, either four or six cylinder.Pitts Special biplanes have a never exceed speed of 182 kn (337 km/h), a service ceiling of 21,000 feet, and a climb rate of 2,700 feet per minute. The Pitts Special set itself apart soon after its introduction and dominated international aerobatic competitions in the 1960's and 1970's. Today, it continues to be a crowd favorite at airshows.",
      image: "http://0.0.0.0:8000/files/Aviat20Pitts20Special20S-1S.jpg",
      created_time: "2022-05-24T12:22:24.878892Z",
      updated_time: "2022-05-24T12:22:24.878909Z",
    },
    {
      id: 3,
      name: "Aviat Pitts Special S-2S",
      description:
        "The Pitts Special is a family of light single-engine aerobatic biplanes created by Curtis Pitts that first flew in September of 1944. The line consists of two primary variants, the single-seat 5-1 and the tandem two-seat S-2. Pitts Specials are renowned for their ability to perform incredibly intricate maneuvers with great precision, including high-g aerobatics. A number of world records have been set in the aircraft type, including for an inverted flat spin.Pitts Special biplanes are small: the length of the 5-1 is 15 ft 6 in (4.72 m) and the S-2 is 18 ft 9 in (5.72 m). The aircraft have a swept upper wing and a straight lower, with the 5-1 having a 17 ft 4 in (5.28 m) upper wingspan and the S-2 a 20 ft (6.10 m) upper wingspan. Each is a taildragger with standard tail units and are powered by horizontally opposed \"flat\" engines, either four or six cylinder.Pitts Special biplanes have a never exceed speed of 182 kn (337 km/h), a service ceiling of 21,000 feet, and a climb rate of 2,700 feet per minute. The Pitts Special set itself apart soon after its introduction and dominated international aerobatic competitions in the 1960's and 1970's. Today, it continues to be a crowd favorite at airshows.",
      image: "http://0.0.0.0:8000/files/Aviat20Pitts20Special20S-2S.jpg",
      created_time: "2022-05-24T12:22:24.886538Z",
      updated_time: "2022-05-24T12:22:24.886555Z",
    },
    {
      id: 4,
      name: "Beechcraft Baron G58",
      description:
        "The very first Beechcraft Baron was introduced in 1961, and the light twin-engine piston aircraft was succeeded by multiple variants before the long-body Baron 58 was birthed in the Summer of Love, 1969.It was 2005 when the modern G58 joined the family, continuing a proud tradition of craftsmanship and comfort earned by its predecessors – and it ushered in an era of next-gen technology for the Baron line.The G58's cockpit has been integrated with the Garmin 1000 NXi avionics suite, a flight computer with dual-core processor, improved graphical interface, high-res displays, sophisticated IFR and VFR chart options, and additional functionality to improve overall situational awareness.Twin 300-hp Continental Motors propel the G58 to a top cruise speed of 202 kts, while offering exceptional climb, respectable range, and increased peace of mind from system redundancy. Well-harmonized controls and rock-solid handling add to the performance picture, reaffirming this Baron's place as a workhorse aircraft, while luxurious amenities earn the G58 show-horse praise.",
      image: "http://0.0.0.0:8000/files/Beechcraft20Baron20G58.jpg",
      created_time: "2022-05-24T12:22:24.895842Z",
      updated_time: "2022-05-24T12:22:24.895856Z",
    },
    {
      id: 5,
      name: "Beechcraft Bonanza G36",
      description: "Model 33",
      image: "http://0.0.0.0:8000/files/Beechcraft20Bonanza20G36.jpg",
      created_time: "2022-05-24T12:22:24.901074Z",
      updated_time: "2022-05-24T12:22:24.901090Z",
    },
    {
      id: 6,
      name: "Beechcraft King Air 350i",
      description:
        'The Beechcraft King Air is the world\'s most popular business turboprop, a distinction earned over time through consistent, reliable performance and continuous refinement. A decade after the first prototype took flight in 1963, the company introduced the larger "Super King Air" – and though the "super" has since been dropped from the name, the branch is enjoying the longest production run of any civilian turboprop aircraft in its class.In 2008, building on a well-established legacy, Beechcraft announced the King Air 350i, with an advanced avionics suite, greater passenger comfort, and reductions to interior noise and vibration that make the model a true rival to smaller jets.The plane\'s powerful but efficient Pratt & Whitney Canada PT6A-60A engines, paired with dynamically-balanced four-blade Hartzell propellers, equate to remarkable payload capacity, extended range, and the most fuel-friendly aircraft in the business aviation market.With excellent short runway performance and long, rugged landing gear, the 350i is able to take off and touch down at airports of almost any size – an invaluable asset in our modern world where business needs can take you anywhere.',
      image: "http://0.0.0.0:8000/files/Beechcraft20King20Air20350i.jpg",
      created_time: "2022-05-24T12:22:24.914977Z",
      updated_time: "2022-05-24T12:22:24.914990Z",
    },
    {
      id: 7,
      name: "Boeing 747-8 Intercontinental",
      description:
        "The 747 was first conceived in the 1960s, as Boeing's proposed entry for a U.S. Air Force study into supersized strategic transport aircraft. The wide-body commercial airliner would eventually enter public service with Pan Am World Airways in 1970, where it was dubbed the industry's first 'Jumbo Jet' and would go on to hold the passenger capacity record for 37 years.After decades exploring larger-capacity versions, in 2004 Boeing announced the 747 Advanced – a stretched model they officially designated as the 747-8 a year later, with a Freighter variant (747-8F) for cargo launching in October Freighter variant (747-8F) for cargo launching in October 2011, and an Intercontinental variant (747-81) for passengers taking flight with Lufthansa in June 2012.As an evolution of the 747-400, the 747-8 refines and upgrades its predecessor's engines, at the same time utilizing extensive cockpit technology from the 787 Dreamliner. The result is a high-tech, low-weight powerhouse designed for increased performance, reduced noise, and ultra low emissions – a design further improved by a thoroughly re-imagined wing system that decreases wake turbulence and drag, boosting fuel economy, range, and overall aerodynamics.With its super-jumbo-jet size and 60 years worth of engineering maturity, the 747-8 could easily seem far-removed from its origins. But one look at its silhouette andthe lineage shines through, in the elegant curves of its the lineage shines through, in the elegant curves of its double-decker form that make it one of the most recognizable planes in the world, forever worthy of the graceful nickname bestowed on the first of its line: 'Queen of the Skies'.",
      image: "http://0.0.0.0:8000/files/Boeing20747-820Intercontinental.jpg",
      created_time: "2022-05-24T12:22:24.922516Z",
      updated_time: "2022-05-24T12:22:24.922529Z",
    },
    {
      id: 8,
      name: "Boeing 787-10 Dreamliner",
      description: "787-8",
      image: "http://0.0.0.0:8000/files/Boeing20787-1020Dreamliner.jpg",
      created_time: "2022-05-24T12:22:24.929165Z",
      updated_time: "2022-05-24T12:22:24.929183Z",
    },
    {
      id: 9,
      name: "Boeing F/A-18 Super Hornet",
      description:
        "The F/A-18 Super Hornet is a line of twin-engine, supersonic, multi-role fighter aircraft produced by American defense contractor Boeing. The Super Hornet, which can operate from either land airfields or from aircraft carriers, performs a number of missions, including armed reconnaissance, fleet defense, in-flight refueling, close air support, and air superiority, among others. The F/A-18E is the single-seat variant of the Super Hornet, and the F/A-18F is the two-seat version, with a pilot and a weapon systems officer, who sits behind the pilot. The Super Hornet is operated by the United States Navy, the Royal Australian Air Force, and the Kuwait Air Force. The Super Hornet features a main wing with a span of 44 ft 8.5 in (13.63 m) tricycle landing gear, and a fuselage-mounted empennage with twin outwardly-angled vertical stabilizers. Both the E and F versions of the Super Hornet are powered by two General Electric F414-GE-400 afterburning turbofan engines that each deliver up to 13,000 lbf (58 kN) of thrust in military power and up to 22,000 lbf (98 kN) pounds under afterburner. The Super Hornet has a top speed of Mach 1.6, has a service ceiling of 50,000 feet above sea level, climbs at a rate of 45,000 feet per minute, and has a range of 1,800 nmi (3,334 km). Extreme power and extraordinary performance define the Boeing F/A-18 Super Hornet. Whether flying breathtakingly-fast just feet above the surface, or engaging in a performance of dynamic maneuvers tens of thousands of feet aloft, the Super Hornet is a machine meant to be pushed to the limits.",
      image: "http://0.0.0.0:8000/files/Boeing20F2FA-1820Super20Hornet.jpg",
      created_time: "2022-05-24T12:22:24.937747Z",
      updated_time: "2022-05-24T12:22:24.937763Z",
    },
    {
      id: 10,
      name: "Cessna 152",
      description:
        "In 1977, Cessna set out to modernize their exceedingly-popular light aircraft Model 150, and the result was the 152 – a new two-seat monoplane that quickly became a general aviation classic and one of the most popular trainer aircraft of the post-World War II era.During the 152's full production run (1977-1985), Cessna manufactured over 7,500 aircraft, between its primary factory in Wichita, Kansas and affiliated Reims Aviation of France.Widely recognized as a workhorse aircraft, the 152 came stock with a more powerful piston-engine than its predecessor, an improved 'gull wing' propeller, and changes to its powerplant and cowling for reduced noise and vibration.While the 152 is forgiving of mistakes and easy to fly – with a high-wing configuration that translates to excellent cockpit visibility – it does put the 'light' in light aircraft, a trait that may add to the challenge of breezy crosswind trait that may add to the challenge of breezy crosswind flight, but also makes for generally docile handling and an overall enjoyable journey, whether you're a seasoned pilot of just learning to fly.",
      image: "http://0.0.0.0:8000/files/Cessna20152.jpg",
      created_time: "2022-05-24T12:22:24.943216Z",
      updated_time: "2022-05-24T12:22:24.943230Z",
    },
  ],
};

nock("https://api.fake-rest.refine.dev:443", { encodedQueryParams: true })
  .get("/posts")
  .query({ page: 1 })
  .reply(200, sampleData);

nock("https://api.fake-rest.refine.dev:443", { encodedQueryParams: true })
  .get("/posts")
  .query({ page: 1, ordering: "name" })
  .reply(200, sampleData);

nock("https://api.fake-rest.refine.dev:443", { encodedQueryParams: true })
  .get("/posts")
  .query({ page: 1, ordering: "-name,date" })
  .reply(200, sampleData);

nock("https://api.fake-rest.refine.dev:443", { encodedQueryParams: true })
  .get("/posts")
  .query({ page: 1, name: "hello", description: "a" })
  .reply(200, sampleData);

axios.defaults.adapter = require("axios/lib/adapters/http");

describe("getList", () => {
  it("correct response", async () => {
    const response = await DrfServer(
      "https://api.fake-rest.refine.dev",
      axios
    ).getList({ resource: "posts" });

    expect(response.data[0]["id"]).toBe(1);
    expect(response.data[0]["name"]).toBe("Airbus A320neo");
    expect(response.total).toBe(20);
  });

  it("correct sorting response", async () => {
    const response = await DrfServer(
      "https://api.fake-rest.refine.dev",
      axios
    ).getList({
      resource: "posts",
      sort: [
        {
          field: "name",
          order: "asc",
        },
      ],
    });

    expect(response.data[0]["id"]).toBe(1);
    expect(response.data[0]["name"]).toBe("Airbus A320neo");
    expect(response.total).toBe(20);
  });

  it("correct sorting response", async () => {
    const response = await DrfServer(
      "https://api.fake-rest.refine.dev",
      axios
    ).getList({
      resource: "posts",
      sort: [
        {
          field: "name",
          order: "desc",
        },
        {
          field: "date",
          order: "asc",
        },
      ],
    });

    expect(response.data[0]["id"]).toBe(1);
    expect(response.data[0]["name"]).toBe("Airbus A320neo");
    expect(response.total).toBe(20);
  });

  it("correct filter and sort response", async () => {
    const response = await DrfServer(
      "https://api.fake-rest.refine.dev",
      axios
    ).getList({
      resource: "posts",
      filters: [
        {
          field: "name",
          operator: "eq",
          value: ["hello"],
        },
        {
          field: "description",
          operator: "eq",
          value: ["a"],
        },
      ],
    });

    expect(response.data[0]["id"]).toBe(1);
    expect(response.total).toBe(20);
  });
});
