import { Component } from "@/types";
import { getId } from "@/utils/helper";
import { HeadingLink } from "@/components/utils";

/**
 * scroll-mt-20 sm:scroll-mt-4: set top margin when heading clicked/linked
 */

export function H1({ children }: Component) {
  const headingId = getId(children as string);

  return (
    <h1 id={headingId} className="scroll-mt-20 sm:scroll-mt-4 text-3xl">
      <HeadingLink headingId={headingId}>{children}</HeadingLink>
    </h1>
  );
}

export function H2({ children }: Component) {
  const headingId = getId(children as string);

  return (
    <h2 id={headingId} className="scroll-mt-20 sm:scroll-mt-4 text-2xl">
      <HeadingLink headingId={headingId}>{children}</HeadingLink>
    </h2>
  );
}

export function H3({ children }: Component) {
  const headingId = getId(children as string);

  return (
    <h3 id={headingId} className="scroll-mt-20 sm:scroll-mt-4 text-xl">
      <HeadingLink headingId={headingId}>{children}</HeadingLink>
    </h3>
  );
}

export function H4({ children }: Component) {
  const headingId = getId(children as string);

  return (
    <h4 id={headingId} className="scroll-mt-20 sm:scroll-mt-4">
      <HeadingLink headingId={headingId}>{children}</HeadingLink>
    </h4>
  );
}

export function H5({ children }: Component) {
  const headingId = getId(children as string);

  return (
    <h5 id={headingId} className="scroll-mt-20 sm:scroll-mt-4">
      <HeadingLink headingId={headingId}>{children}</HeadingLink>
    </h5>
  );
}

export function H6({ children }: Component) {
  const headingId = getId(children as string);

  return (
    <h6 id={headingId} className="scroll-mt-20 sm:scroll-mt-4">
      <HeadingLink headingId={headingId}>{children}</HeadingLink>
    </h6>
  );
}
