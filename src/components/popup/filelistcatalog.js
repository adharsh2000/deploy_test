import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sidebar } from "primereact/sidebar";
import { Carousel } from "primereact/carousel";
import { ScrollPanel } from "primereact/scrollpanel";
import { CarouselService } from "@/service/Carousel";
import ReactPlayer from "react-player";
import { Montserrat } from "@next/font/google";

const myMontserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const Bordmeetingview = (props) => {
  const [selectedCity, setSelectedCity] = useState(null);
  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];

  const [products, setProducts] = useState([]);
  const responsiveOptions = [
    {
      breakpoint: "1199px",
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: "991px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 1,
      numScroll: 1,
    },
  ];
  useEffect(() => {
    CarouselService.getProductsSmall().then((data) =>
      setProducts(data.slice(0, 9))
    );
  }, []);
  const productTemplate = (product) => {
    return (
      <div className="bg-white boxshadow01 rounded-[6.384px] xl:p-[0.625vw] p-3 flex">
        <div className="bg-[#FDFAFA] xl:w-[7.240vw] xl:h-[6.198vw] rounded-lg flex items-center justify-center text-[#A93439] xl:text-[2.604vw]">
          <i className="austin-file-download"></i>
        </div>
        <div className="space-y-2">
          <div className="text-[#374151] xl:text-[0.781vw] font-medium -tracking-[0.287px]">
            Report Document
          </div>
          <div className="text-[#4B586E]">
            <div className="xl:text-[0.625vw] text-[10px] font-normal">
              Submited By:{" "}
              <span className="xl:text-[0.729vw] text-[12px] font-bold">
                Jhon M. C.
              </span>
            </div>
            <div className="xl:text-[0.625vw] text-[10px] font-normal">
              Date:{" "}
              <span className="xl:text-[0.729vw] text-[12px] font-bold">
                2023, apr 23rd 12:23 pm
              </span>
            </div>
            <div className="xl:text-[0.625vw] text-[10px] font-normal">
              Format:{" "}
              <span className="xl:text-[0.729vw] text-[12px] font-bold">
                MP3
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between gap-2">
            <Link
              href={""}
              className="text-white text-xs xl:p-[0.417vw] p-2 bg-[#6480AB] rounded-md flex items-center gap-2"
            >
              <span>Preview</span>
              <i className="austin-eye"></i>
            </Link>
            <Link
              href={""}
              className="text-[#4B586E] text-xs xl:p-[0.417vw] p-2 bg-[#F5F6F7] rounded-md flex items-center gap-2"
            >
              <span>Download</span>
              <i className="austin-download-circle"></i>
            </Link>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div>
        <Sidebar
          visible={props.visible}
          position="bottom"
          style={{ background: "#FFF", borderRadius: "8px 8px 0 0" }}
          className="custmSidebar width1920"
          onHide={() => props.onHides(false)}
          blockScroll={true}
        >
          <div className="xl:px-[6.667vw] px-[20px]">
            <div className="flex items-center justify-end">
              <Link
                href={""}
                onClick={() => {
                  props.onHides(false);
                }}
                className="text-white xl:text-[1.146vw] bg-[#982E33] rounded-br-[10px] rounded-bl-[10px] h-[36px] xl:h-[2.917vw] w-[36px] xl:w-[3.021vw] flex items-center justify-center"
              >
                <i className="austin-close-circle"></i>
              </Link>
            </div>
            <div className="flex-wrap xl:flex-nowrap flex items-center justify-between gap-1">
                <div className="col">
                <div className="flex items-center gap-[10px] xl:gap-[0.521vw] mb-[10px]">
                <div>
                  <Image
                    src={"/assets/images/catalogicon/icon01.png"}
                    width={"28"}
                    height={"28"}
                    alt=""
                  ></Image>
                </div>
                <div className="text-[#A93439] text-[12px] xl:text-[0.625vw] font-bold">
                  AISD Shorts
                </div>
              </div>
                <div className="text-[#374151] text-[24px] xl:text-[1.250vw] font-bold -tracking-[0.72px]">
                  CouncilNavarro Early College High School Agriculture Program
                </div>
                <div className="text-[#9CA1AB] text-[12px] xl:text-[0.625vw]">
                  2023, apr 23rd 12:23 pm
                </div>
                </div>
            <div className="col flex items-center gap-[18px] xl:gap-[0.938vw] iconsList">
                <Link href={""} width={""} height={""}>
                    <i className="austin-user-search"></i>
                </Link>
                <Link href={""} width={""} height={""}>
                    <i className="austin-file-download"></i>
                </Link>
                <Link href={""} width={""} height={""}>
                    <i className="austin-star-outline"></i>
                </Link>
                <Link href={""} width={""} height={""}>
                    <i className="austin-share"></i>
                </Link>
            </div>
            </div>
            <div className="xl:mt-[0.833vw] mt-4 grid grid-cols-12">
              {/**col-span-7**/}
              <div className="col-span-12 xl:col-span-7">
                <div className="xl:mt-[0.885vw] mt-4">
                  <div className="xl:w-[44.635vw] xl:h-[27.125vw]">
                    <ReactPlayer
                      url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                      controls={true}
                      width={"100%"}
                      height={"100%"}
                      light={
                        <img
                          src="/assets/images/video-thumb.png"
                          alt="Thumbnail"
                          style={{maxHeight: '100%'}}
                        />
                      }
                    />
                  </div>
                </div>
                <div className="xl:mt-[1.563vw] mt-7 xl:w-[44.635vw]">
                  <div className="text-[#374151] xl:text-[1.250vw] text-xl font-medium pb-3">
                    Attached Files
                  </div>
                  <Carousel
                    value={products}
                    showIndicators={false}
                    numVisible={2}
                    numScroll={1}
                    responsiveOptions={responsiveOptions}
                    itemTemplate={productTemplate}
                    className="custm_carousel"
                  />
                </div>
              </div>
              {/**col-span-5**/}
              <div className="col-span-12 xl:col-span-5">
                <div className="xl:py-[0.833vw] py-3 xl:px-[1.250vw] px-5">
                  <div className="text-[#374151] xl:text-[1.250vw] text-xl font-bold -tracking-[0.48px]">
                    Video Transcription
                  </div>
                  <div className="scrollpanel-demo">
                    <ScrollPanel
                      style={{ width: "100%", height: "35.854vw" }}
                      className="xl:mt-[0.833vw] mt-4 custombar1"
                    >
                      <div className={myMontserrat.className}>
                        <div className="text-sm font-normal leading-4 space-y-2">
                          <p>
                            {" "}
                            Lorem ipsum dolor sit amet consectetur. Vitae tortor
                            id viverra sit. Lacus odio eu enim tristique.
                            Interdum consequat commodo turpis mollis mi ante ac
                            lectus felis. Accumsan sed dui nunc adipiscing urna
                            massa bibendum. Neque donec rutrum pellentesque
                            duis.
                          </p>
                          <p>
                            Viverra dictum odio et at dis egestas tristique
                            felis. Dictum at nunc sit faucibus vel. Quis ipsum
                            tincidunt dignissim convallis. Diam platea consequat
                            nunc nisl. Quam nulla pellentesque consectetur in.
                            Gravida tellus fermentum lacus bibendum. Etiam
                            scelerisque sed suspendisse blandit. Facilisi
                            pellentesque tristique enim et. At enim felis diam
                            lacus. Turpis massa duis proin pharetra velit mauris
                            senectus duis. Odio eu donec ultricies pellentesque
                            mollis consequat maecenas augue. Integer ut nulla
                            habitasse consequat sit sed. Laoreet rhoncus sit
                            faucibus venenatis justo suscipit tortor facilisi
                            at.
                          </p>
                          <p>
                            In rhoncus sed morbi ut sem feugiat ut potenti
                            porttitor. Neque enim cras sed morbi. Nisl ornare
                            eget malesuada interdum dictumst <span className="bg-[#DBE1EA] px-[5px] font-semibold text-[#4B586E]">aenean id congue.
                            Quam amet scelerisque nibh molestie. Habitant cursus
                            aliquam ut orci nullam</span> eu id cursus semper. Nulla
                            convallis massa integer congue molestie facilisi non
                            ut aliquam. Vulputate arcu sit venenatis tortor erat
                            facilisis.
                          </p>
                          <p>
                            Pharetra sed ipsum mattis at urna sit sit risus
                            massa. In aenean odio amet orci vel. Eget sed ipsum
                            eu fames. Hac ut ipsum fringilla platea turpis
                            parturient nibh venenatis varius. Proin vel porta
                            scelerisque consectetur magnis in. Mi diam at quis
                            eget non ut tortor facilisi. Ullamcorper sit
                            faucibus placerat augue sed leo. Convallis facilisis
                            egestas viverra donec facilisis. Velit lectus cursus
                            ornare at ut eu. Ullamcorper eget condimentum non
                            ornare tempus netus vel. Tortor dignissim consequat
                            elementum amet risus cursus gravida. Magnis arcu in
                            ridiculus sit faucibus in erat dolor ut. Vulputate
                            gravida consectetur augue ultrices donec ullamcorper
                            eget. Sed felis morbi blandit pretium nisi vitae eu
                            sit.
                          </p>
                          <p>
                            Leo sed donec nisi turpis purus arcu. Amet lectus
                            urna blandit pellentesque malesuada mattis vel
                            fringilla in. Pharetra id eu faucibus vel volutpat
                            ultricies. Maecenas leo velit quam eget porttitor
                            duis. Lorem ut diam tempus lacus cursus quis arcu
                            risus. Sit risus lacus curabitur proin. Nisl
                            elementum maecenas ipsum aliquam duis pellentesque
                            eget ante. In tortor congue duis id. Consequat
                            euismod netus a ornare in malesuada risus tortor
                            eleifend. Scelerisque lacus arcu id morbi gravida
                            cras nunc duis. Lorem nisi in at volutpat diam sed
                            non. Quis vulputate ornare donec amet.
                          </p>
                          <p>
                            Et fermentum augue egestas lobortis morbi tristique
                            feugiat. Gravida euismod pulvinar nec tempor diam
                            aliquam tincidunt. Nulla laoreet sit donec platea
                            adipiscing a malesuada quis. Molestie maecenas cras
                            elementum rutrum duis integer. Nulla ac sed sit
                            massa arcu sit purus. Enim arcu rutrum egestas in
                            ultricies praesent ut pharetra. Tristique
                            pellentesque volutpat leo sit amet suspendisse
                            ipsum. Neque eleifend pellentesque a dolor. Eu nunc
                            tellus ut tellus.
                          </p>
                          <p>
                            Gravida vel eget elementum fermentum vestibulum in
                            faucibus. Risus nunc euismod vitae nisi tempus at.
                            Viverra ullamcorper sem ornare sit. Egestas ut nisl
                            non diam augue. In turpis etiam arcu pellentesque
                            tellus viverra turpis id. Dictumst justo varius
                            egestas sem dignissim. Facilisi mauris tincidunt
                            senectus tellus nullam sit cras eleifend. Magna
                            lectus auctor massa arcu lobortis donec mauris.
                            Gravida ullamcorper euismod vel dui. Magna eu netus
                            vitae sed tellus. Mattis varius orci quis sagittis
                            eu aliquam lacus tincidunt.
                          </p>
                          <p>
                            Egestas purus nullam dignissim tellus fringilla
                            quis. Enim nullam libero quis penatibus. Tincidunt
                            blandit ipsum laoreet nullam. Consequat hendrerit
                            gravida scelerisque ut fringilla faucibus. Volutpat
                            tempus eleifend nibh mattis. Ut morbi sit gravida at
                            ac morbi tellus praesent. Ipsum nullam turpis semper
                            tincidunt nullam quam neque sit vel. Hendrerit
                            tempor pretium mus in blandit. Interdum aliquet
                            volutpat magnis nulla quam nam malesuada a amet.
                            Tristique ipsum tempus odio odio dignissim et.
                            Mauris eu imperdiet erat ornare erat ut turpis.
                            Vitae augue sapien nam dolor dignissim convallis
                            morbi eget. Sit magna in ultrices adipiscing
                            dignissim neque.
                          </p>
                          <p>
                            Faucibus vel felis tellus et sed egestas. Eu laoreet
                            at nisl quam dui. Volutpat dictum felis nisi tortor
                            egestas at nulla massa. In vitae orci sit nunc.
                            Magna in scelerisque imperdiet neque.
                          </p>
                          <p>
                            In feugiat in tortor ipsum. Pellentesque leo magnis
                            suspendisse ultrices felis porta cras luctus a. Nunc
                            facilisis volutpat felis sed et. Posuere nec quis
                            lorem dictum lectus. Dictum et viverra ornare
                            varius. Facilisi integer tempus lorem pulvinar
                            dignissim penatibus molestie. Diam orci in in nunc
                            id commodo.
                          </p>
                          <p>
                            Tincidunt turpis tellus elit semper. Ultricies lorem
                            tellus vestibulum malesuada sed odio. Leo pharetra
                            sagittis viverra at viverra aliquam amet. Eget
                            aliquet ut ultrices felis a enim. Nec mattis nibh
                            faucibus odio aliquam sit. Ut mattis nulla felis
                            ultrices convallis dictum vitae. At viverra
                            condimentum mattis in. Arcu morbi et pulvinar
                            ultrices.
                          </p>
                          <p>
                            Feugiat felis at aliquam tristique. Mi cras id
                            faucibus ac at euismod pulvinar condimentum cursus.
                            At massa morbi nascetur facilisi gravida quis aenean
                            ultrices. Odio faucibus in velit malesuada orci
                            consectetur non quisque sed. Nibh elementum habitant
                            ornare maecenas morbi faucibus ipsum elit mi. Duis
                            posuere auctor sit tristique faucibus scelerisque
                            dui mauris. Mauris sit non fringilla purus maecenas
                            sodales praesent tellus. Massa id rutrum
                            pellentesque facilisis ipsum tristique aliquam et
                            ultrices. Cras massa tortor faucibus sapien senectus
                            donec semper. Felis pellentesque sed at eu augue.
                          </p>
                          <p>
                            Sit ullamcorper ipsum nunc fringilla nullam tempor
                            turpis. Adipiscing turpis arcu id mauris. Pretium et
                            egestas aliquam quis risus leo. Suspendisse quis
                            tellus senectus quam magna arcu neque. Ullamcorper
                            id diam adipiscing diam netus sed consequat. In
                            volutpat eu ullamcorper pretium nullam nunc
                            tristique volutpat rhoncus. Nunc et cras nisl
                            ultricies. Risus eros lobortis cras luctus in. Duis
                            ut neque in nec quis volutpat. Ullamcorper arcu enim
                            gravida tortor nulla amet neque mauris. Ante id nunc
                            aliquet augue maecenas sit platea proin eu.
                          </p>
                          <p>
                            Dis sed sagittis purus proin at commodo dolor ac
                            nec. Tempor euismod in felis sed volutpat. Nunc id
                            duis massa luctus lorem. Mi eget ipsum aliquam in
                            nisi tellus. Pharetra pellentesque duis imperdiet
                            donec pellentesque accumsan dignissim ut elementum.
                            Eget interdum massa sem quisque consequat dignissim
                            tincidunt imperdiet lacus. Imperdiet habitasse etiam
                            senectus in.
                          </p>
                          <p>
                            {" "}
                            Dolor tincidunt in convallis morbi nec. Condimentum
                            egestas mattis nisl fames. Ut diam eget a integer.
                            Id odio porttitor orci vitae pharetra arcu praesent
                            nulla. Neque lobortis sed eget lectus velit dictum
                            vitae. Nunc vulputate gravida nunc nibh semper eget
                            est. Ut consequat vulputate magnis leo ullamcorper
                            nisl. Tincidunt nisl sed vitae nisi lorem orci
                            ornare. Ac euismod dictumst pretium tellus nibh
                            suspendisse faucibus.
                          </p>
                          <p>
                            Nulla magna ullamcorper egestas imperdiet quis
                            facilisis nullam tellus. Sodales nisi tincidunt
                            congue cursus consectetur integer rhoncus massa nec.
                            Ultrices eu morbi feugiat id dictum. Placerat
                            facilisi dolor mattis interdum. Viverra magna
                            aliquet at vitae tristique ac vivamus phasellus.
                            Venenatis malesuada consequat elementum nullam amet.
                            Sed tincidunt nunc vehicula ultrices sit urna magna
                            lorem. Sit amet odio tempus sagittis lectus sit sit.
                            Eget elit quisque faucibus vestibulum dictum platea
                            elementum.
                          </p>
                          <p>
                            Varius bibendum vitae varius nec urna pellentesque.
                            Ornare sapien gravida vitae est vel elementum
                            porttitor nisi. Faucibus massa lectus viverra
                            maecenas orci et nunc. Nullam molestie nibh commodo
                            dictum sem scelerisque et. Tristique lectus egestas
                            eu bibendum sed ullamcorper at nec viverra. Vitae
                            sit faucibus sed velit. Mattis diam sit amet magna.
                            In velit nullam sit viverra mollis maecenas sit. Eu
                            accumsan molestie purus interdum integer consequat.
                            Aliquam duis facilisis blandit aliquam eget posuere
                            tincidunt ullamcorper. Volutpat quisque non mauris
                            sem sagittis nisl nec neque. Id tempor mauris auctor
                            placerat a diam libero viverra.
                          </p>
                          <p>
                            Fringilla nunc varius blandit eget pellentesque quis
                            pharetra cras. Tempor lobortis cras metus rhoncus.
                            Et lorem porttitor suspendisse fringilla
                            pellentesque facilisi vulputate eleifend. In velit
                            dui elementum consequat fermentum nulla. Vitae est
                            sed nibh mauris arcu adipiscing in pellentesque.
                            Pellentesque morbi fermentum elementum varius.
                            Pharetra duis eu est pellentesque ultrices sit nisl.
                            Cum nec etiam a id imperdiet mi eu enim. Nunc tortor
                            semper amet vitae. Eget non magna sit elementum
                            viverra. Amet ac donec justo enim tortor ut nec hac
                            vel. Quisque viverra rutrum neque ac in blandit
                            praesent. Mi a tincidunt lorem elit volutpat
                            posuere. Et amet pellentesque nisi purus netus elit
                            tincidunt dignissim platea.
                          </p>
                          <p>
                            Vitae a cras urna hendrerit mi in. Proin enim vel
                            proin ut sed. Diam tellus non adipiscing tincidunt
                            facilisi venenatis. Ultrices dolor est mi elit
                            sagittis. Viverra massa ac faucibus eget elementum
                            integer. Orci auctor porttitor at arcu scelerisque
                            a. Turpis aliquet diam diam quam pharetra. Vel
                            senectus purus augue accumsan semper nibh nunc
                            ornare. Tellus tortor cras.
                          </p>
                        </div>
                      </div>
                    </ScrollPanel>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Sidebar>
      </div>
    </>
  );
};

export default Bordmeetingview;
