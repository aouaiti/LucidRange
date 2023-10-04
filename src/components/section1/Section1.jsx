import { useRef, memo } from "react";
// import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import Trigger from "../trigger/Trigger";
import Typewriter from "typewriter-effect";
import Typography from "@mui/material/Typography";

const blurDataArr = {
  url1: "data:image/webp;base64,UklGRkoEAABXRUJQVlA4WAoAAAAgAAAAUgEAvQAASUNDUBgCAAAAAAIYAAAAAAIQAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANlZQOCAMAgAAEBgAnQEqUwG+AD7tdq9WKacjo6ApeTAdiWlu3V2pH+f7u/IAoH2rH1nRrXDBpzw6L/sbG6FObW3oMT0LarMr9dSlvvTVICsv//hT3Bu/CnUglKumqQFZXtr6gC+9B0n3j0Ny3oca1uhfLIQpe84oDqWKroD2YPFCNXsjTKK6IUvHbnXb9t8avIt/x3Cn6v6yDTO66d8tcfWrie0q+Upj2wKItvtbLGxWz9ls/x2+1Y+t4cALmWxTD4PasfWjDeS12NCE3pLwKKVAAP7tkT/yY2i07WmtTRmUpbCf4gNK14ioTawbpbRGd+QXFmILDFyweCRdgdz/nNytipUHu9rUhVPx4nG5AA44PEeXGj/WDjvjGug/4HP0moRsP84Nfysi0xB2ij6H1BTy4EyC5F9bt14oc6PsTuCeSWmfgm3mRjQ2vtEUbKM+ELukFG9QYXS1zfoh8OKMHDggg6F1U5+YbWdnqPldaLC43HsbZ2IW1zStEeeGAKaxlwoAiMgavGh9QG/lY8VxkOfBKFEfRvnsc9y4dRBwEf0Og/38nNT6z3xQ/iJyPr6aQo+lpwvHLKsQ2BAUZQAJyKcWDBofqlGIJlLoaene47zACygAOjWZFfTqrdy0+QAACYJA5c5t2REhP+3v32F7AAAjhrGcbqwhbG79JcegZTjmOcAAWU+60XLJu5FeqAAA8vqsEAA=",
  url2: "data:image/webp;base64,UklGRuoEAABXRUJQVlA4WAoAAAAgAAAAUgEAvQAASUNDUBgCAAAAAAIYAAAAAAIQAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANlZQOCCsAgAAEB8AnQEqUwG+AD7tbq9SM7EuoqbTe5JwHYlnbuAFPY6dT0U6HiVtA1gNoLb9SjOxyS1qwIGcSapFnL+ouXnxzVus6tWuMn7nlBcmHKn7vba1IfVw4eyYjS7zg5dM1bYBPbJ9ZTUBw7J4flJuaIJegipM19bQeBThw4b2a44FsPVl2lwAQ4Po7iWkaz//85ysX3UtgnTpDPXLAM48m2hjKkNcuTudi32pS5OT69aTd6//mMSb9SOY38Zx5PIYYfUBW6W2WgnbEdfP9VfEjwfgE8EwNnDy8fhpok1alLk1Vck/AVGXvV6SoGN8a0pcnJ8kbC2/Un2KRDA7839WpSwGiQAA/qUv+Xse5uDPF8F/C3Tmh+g3WLYFZHXiCXeJkCNiJ4JXcAGTot7MCaDwn9W4MtHS/c7ZjJ7pLXe87x56CuwzgNsYK3S6IE6oE6Jw0h+85PBbck9gCrxdtrU8DKMdo6Qz18iGFLWiz9Q7ezxXT5Wm7PtjHfsE4PX2EJXtze1I5/WN4Lf1zpKL4O6ZVtqmbHoSH8Eb/7m2FehThQ4IdjowlSPFe+H1bBi3M+GOAqVpGlD7s90ZXNJJw3pzFVauq2EYKoedI6+11/3DE+LyvXFPoBwF98k/VUdE20ogDa3g+LsN4bloJQLUS7K5V9cYQ2z2CNKAZxvJCnmEx7Xc1642UzQABFwE989rZ0zqot7Oxscao/Gv+BcfJB/ScomErxaU2GMySiwAsuqwww62c5AzD0Mb17wiwWACS1b5RQABjBFDQCaZgnXMOsi0FeCTKz64UcAADCJAMmKyo4H50dzX+QKW7CbSg6HaAABaoYoImtRvEQc9u+kSmFI0eWZkIH+MaQAG/Emi9fE79hE2Fj5HDf7njoUvRLtbv+0JkEANSTa5ycXJyVjPgAAA",
};
const animateDI = {
  initial: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  hide: {
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
};

function Section1() {
  const themeMode = useSelector((state) => state.theme.mode);
  const selectedResume = useSelector((state) => state.section2.selectedResume);
  const section1Ref = useRef(null);
  const section1Trigger = useRef();
  const isInView = useInView(section1Trigger, {
    // margin: "0px -40%",
  });

  return (
    <Box
      id="section-1"
      ref={section1Ref}
      style={{ position: "fixed", height: "100vh", width: "100vw" }}
    >
      <Typography
        variant="h2"
        sx={{
          color: "white",
          zIndex: "999999",
          position: "absolute",
          top: "80%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          textAlign: "center",
          width: "100%",
        }}
      >
        <Typewriter
          options={{
            strings: [
              "T-shirt configurator",
              "Next-Gen Tees",
              "Abstract Designs",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </Typography>
      {/* <Typography
        variant="h2"
        sx={{
          color: "white",
          zIndex: "999999",
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          textAlign: "center",
          fontWeight: "bold",
          width: "100%",
        }}
      >
        LAZY RESUME
      </Typography> */}
      <Box
        component={motion.div}
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          transition: "1s",
          filter: `${selectedResume.active ? "grayscale(0.8)" : "none"}`,
        }}
      >
        {/* <Image
          src={"/LiamWong_TokyoCity_Night.jpg"}
          alt="night"
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          blurDataURL={blurDataArr.url1}
          priority
          fetchpriority="high"
        /> */}
      </Box>
      <Box
        component={motion.div}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          transition: "1s",
          filter: `${selectedResume.active ? "brightness(0.4)" : "none"}`,
        }}
        variants={animateDI}
        initial="initial"
        animate={`${themeMode === "light" ? "show" : "hide"}`}
      >
        {/* <Image
          src={"/LiamWong_TokyoCity_Day.jpg"}
          alt="day"
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          blurDataURL={blurDataArr.url2}
          // fetchpriority="high"
        /> */}
      </Box>
      <Trigger ref={section1Trigger} />
    </Box>
  );
}
export default memo(Section1);
