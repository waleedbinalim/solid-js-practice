// @refresh reload
import { Suspense } from "solid-js";
import {
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import { CounterProvider } from "./contexts";
import { NavLayout } from "./layouts";
import "./root.css";

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Title>SolidStart - Bare</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
        <CounterProvider>
          <Suspense>
            <ErrorBoundary>
              <NavLayout>
                <Routes>
                  <FileRoutes />
                </Routes>
              </NavLayout>
            </ErrorBoundary>
          </Suspense>
        </CounterProvider>
        <Scripts />
      </Body>
    </Html>
  );
}
