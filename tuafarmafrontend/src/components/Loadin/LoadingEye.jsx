import React from "react";

import { Loader, LoaderWrapper} from "./style";

export default function LoadingEye({ isLoading }) {
  return (
    <>
      {isLoading && (
        <Loader>
          <LoaderWrapper />
        </Loader>
      )}
    </>
  );
}
