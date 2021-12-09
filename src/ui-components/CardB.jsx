/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
} from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text, View } from "@aws-amplify/ui-react";
export default function CardB(props) {
  const { home, overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        "Flex.View[0]": {
          width: "320px",
          padding: "0px 0px 0px 0px",
          position: "relative",
          borderRadius: "19px",
          shrink: "0",
          height: "160px",
        },
        "Flex.Flex[0].Flex[0].Text[0]": {
          padding: "0px 0px 0px 0px",
          alignSelf: "stretch",
          color:
            "rgba(63.999996185302734,169.83334600925446,191.00000381469727,1)",
          textAlign: "left",
          shrink: "0",
          display: "flex",
          label: "$99 USD",
          justifyContent: "flex-start",
          fontFamily: "Inter",
          width: "288px",
          fontSize: "16px",
          lineHeight: "24px",
          position: "relative",
          fontWeight: "700",
          direction: "column",
        },
        "Flex.Flex[0]": {
          padding: "16px 16px 16px 16px",
          alignSelf: "stretch",
          borderRadius: "20px",
          shrink: "0",
          gap: "16px",
          position: "relative",
          direction: "column",
        },
        Flex: {
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          padding: "0px 0px 0px 0px",
          backgroundColor: "rgba(255,255,255,1)",
          borderRadius: "19px",
          gap: "0",
          width: "320px",
          position: "relative",
          justifyContent: "center",
          direction: "column",
          height: "280px",
        },
        "Flex.Flex[0].Flex[0].Text[1]": {
          padding: "0px 0px 0px 0px",
          alignSelf: "stretch",
          color:
            "rgba(63.999996185302734,169.83334600925446,191.00000381469727,1)",
          textAlign: "left",
          shrink: "0",
          display: "flex",
          letterSpacing: "0.010000000000000009px",
          label: "Surprised Pikachu",
          justifyContent: "flex-start",
          fontFamily: "Inter",
          width: "288px",
          fontSize: "16px",
          lineHeight: "24px",
          position: "relative",
          fontWeight: "400",
          direction: "column",
        },
        "Flex.Flex[0].Flex[0]": {
          padding: "0px 0px 0px 0px",
          alignSelf: "stretch",
          position: "relative",
          shrink: "0",
          gap: "8px",
          direction: "column",
        },
        "Flex.View[0].Image[0]": {
          width: "320px",
          padding: "0px 0px 0px 0px",
          position: "absolute",
          top: "0px",
          left: "0px",
          height: "160px",
        },
        "Flex.Flex[0].Flex[0].Text[2]": {
          padding: "0px 0px 0px 0px",
          alignSelf: "stretch",
          color:
            "rgba(4.000000236555934,125.00000014901161,149.00000631809235,1)",
          textAlign: "left",
          shrink: "0",
          display: "flex",
          label: "832 34th Ave, Seattle, WA 98122",
          justifyContent: "flex-start",
          fontFamily: "Inter",
          width: "288px",
          fontSize: "14px",
          lineHeight: "24px",
          position: "relative",
          fontWeight: "400",
          direction: "column",
        },
      },
      variantValues: { property1: "Default" },
    },
    {
      overrides: {
        "Flex.View[0]": {
          width: "320px",
          padding: "0px 0px 0px 0px",
          position: "relative",
          shrink: "0",
          height: "160px",
        },
        "Flex.Flex[0].Flex[0].Text[0]": {
          padding: "0px 0px 0px 0px",
          alignSelf: "stretch",
          color:
            "rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)",
          textAlign: "left",
          shrink: "0",
          display: "flex",
          label: "$99 USD",
          justifyContent: "flex-start",
          fontFamily: "Inter",
          width: "288px",
          fontSize: "16px",
          lineHeight: "24px",
          position: "relative",
          fontWeight: "700",
          direction: "column",
        },
        "Flex.Flex[0]": {
          padding: "16px 16px 16px 16px",
          alignSelf: "stretch",
          position: "relative",
          shrink: "0",
          gap: "16px",
          direction: "column",
        },
        Flex: {
          padding: "0px 0px 0px 0px",
          backgroundColor: "rgba(255,255,255,1)",
          gap: "0",
          width: "320px",
          position: "relative",
          justifyContent: "center",
          direction: "column",
          height: "280px",
        },
        "Flex.Flex[0].Flex[0].Text[1]": {
          padding: "0px 0px 0px 0px",
          alignSelf: "stretch",
          color:
            "rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)",
          textAlign: "left",
          shrink: "0",
          display: "flex",
          letterSpacing: "0.010000000000000009px",
          label: "Angry Pikachu",
          justifyContent: "flex-start",
          fontFamily: "Inter",
          width: "288px",
          fontSize: "16px",
          lineHeight: "24px",
          position: "relative",
          fontWeight: "400",
          direction: "column",
        },
        "Flex.Flex[0].Flex[0]": {
          padding: "0px 0px 0px 0px",
          alignSelf: "stretch",
          position: "relative",
          shrink: "0",
          gap: "8px",
          direction: "column",
        },
        "Flex.View[0].Image[0]": {
          width: "320px",
          padding: "0px 0px 0px 0px",
          position: "absolute",
          top: "0px",
          left: "0px",
          height: "160px",
        },
        "Flex.Flex[0].Flex[0].Text[2]": {
          padding: "0px 0px 0px 0px",
          alignSelf: "stretch",
          color: "rgba(0,63.750030398368835,76.50000303983688,1)",
          textAlign: "left",
          shrink: "0",
          display: "flex",
          label: "832 34th Ave, Seattle, WA 98122",
          justifyContent: "flex-start",
          fontFamily: "Inter",
          width: "288px",
          fontSize: "14px",
          lineHeight: "24px",
          position: "relative",
          fontWeight: "400",
          direction: "column",
        },
      },
      variantValues: { property1: "Angry Pikachu" },
    },
  ];
  const mergeVariantsAndOverrides = (variants, overrides) => {
    const overrideKeys = new Set(Object.keys(overrides));
    const sharedKeys = Object.keys(variants).filter((variantKey) =>
      overrideKeys.has(variantKey)
    );
    const merged = Object.fromEntries(
      sharedKeys.map((sharedKey) => [
        sharedKey,
        { ...variants[sharedKey], ...overrides[sharedKey] },
      ])
    );
    return {
      ...variants,
      ...overrides,
      ...merged,
    };
  };
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      borderRadius="19px"
      gap="0"
      width="320px"
      position="relative"
      justifyContent="center"
      direction="column"
      height="280px"
      {...rest}
      {...getOverrideProps(overrides, "Flex")}
    >
      <View
        width="320px"
        padding="0px 0px 0px 0px"
        position="relative"
        borderRadius="19px"
        shrink="0"
        height="160px"
        {...getOverrideProps(overrides, "Flex.View[0]")}
      >
        <Image
          padding="0px 0px 0px 0px"
          top="0px"
          left="0px"
          src={home?.image_url}
          width="320px"
          position="absolute"
          height="160px"
          {...getOverrideProps(overrides, "Flex.View[0].Image[0]")}
        ></Image>
      </View>
      <Flex
        padding="16px 16px 16px 16px"
        alignSelf="stretch"
        borderRadius="20px"
        shrink="0"
        gap="16px"
        position="relative"
        direction="column"
        {...getOverrideProps(overrides, "Flex.Flex[0]")}
      >
        <Flex
          padding="0px 0px 0px 0px"
          alignSelf="stretch"
          position="relative"
          shrink="0"
          gap="8px"
          direction="column"
          {...getOverrideProps(overrides, "Flex.Flex[0].Flex[0]")}
        >
          <Text
            padding="0px 0px 0px 0px"
            alignSelf="stretch"
            color="rgba(63.999996185302734,169.83334600925446,191.00000381469727,1)"
            textAlign="left"
            shrink="0"
            display="flex"
            justifyContent="flex-start"
            fontFamily="Inter"
            width="288px"
            fontSize="16px"
            lineHeight="24px"
            position="relative"
            fontWeight="700"
            direction="column"
            children={home?.address}
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[0].Text[0]")}
          ></Text>
          <Text
            padding="0px 0px 0px 0px"
            alignSelf="stretch"
            color="rgba(63.999996185302734,169.83334600925446,191.00000381469727,1)"
            textAlign="left"
            shrink="0"
            display="flex"
            letterSpacing="0.010000000000000009px"
            justifyContent="flex-start"
            fontFamily="Inter"
            width="288px"
            fontSize="16px"
            lineHeight="24px"
            position="relative"
            fontWeight="400"
            direction="column"
            children={`${"Price: \u00A3"}${home?.price}${"/night"}`}
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[0].Text[1]")}
          ></Text>
          <Text
            padding="0px 0px 0px 0px"
            alignSelf="stretch"
            color="rgba(4.000000236555934,125.00000014901161,149.00000631809235,1)"
            textAlign="left"
            shrink="0"
            display="flex"
            justifyContent="flex-start"
            fontFamily="Inter"
            width="288px"
            fontSize="14px"
            lineHeight="24px"
            position="relative"
            fontWeight="400"
            direction="column"
            children={home?.createdAt}
            {...getOverrideProps(overrides, "Flex.Flex[0].Flex[0].Text[2]")}
          ></Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
