"use client";

import { useEffect, useState } from "react";

export default function DebugPage() {
  const [browserInfo, setBrowserInfo] = useState<any>(null);
  const [cssSupport, setCssSupport] = useState<any>(null);
  const [animationTest, setAnimationTest] = useState<string>("Not tested");

  useEffect(() => {
    // Collect browser information
    const info = {
      userAgent: window.navigator.userAgent,
      vendor: window.navigator.vendor,
      platform: window.navigator.platform,
      language: window.navigator.language,
      cookiesEnabled: window.navigator.cookieEnabled,
      screenWidth: window.screen.width,
      screenHeight: window.screen.height,
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
      pixelRatio: window.devicePixelRatio,
      online: window.navigator.onLine,
    };
    setBrowserInfo(info);

    // Test CSS support
    const support = {
      animations: testCssSupport("animation", "name"),
      transitions: testCssSupport("transition", "property"),
      transforms: testCssSupport("transform", "rotate(1deg)"),
      flexbox: testCssSupport("display", "flex"),
      grid: testCssSupport("display", "grid"),
      borderRadius: testCssSupport("border-radius", "1px"),
      boxShadow: testCssSupport("box-shadow", "1px 1px 1px rgba(0,0,0,0.1)"),
      opacity: testCssSupport("opacity", "0.5"),
    };
    setCssSupport(support);

    // Test animation execution
    try {
      const testElement = document.createElement("div");
      document.body.appendChild(testElement);
      testElement.style.position = "absolute";
      testElement.style.opacity = "0";
      testElement.style.pointerEvents = "none";

      const animation = testElement.animate(
        [{ transform: "translateY(0px)" }, { transform: "translateY(10px)" }],
        {
          duration: 500,
          iterations: 1,
        },
      );

      animation.onfinish = () => {
        setAnimationTest("Animation completed successfully");
        document.body.removeChild(testElement);
      };

      animation.oncancel = () => {
        setAnimationTest("Animation was cancelled");
        if (document.body.contains(testElement)) {
          document.body.removeChild(testElement);
        }
      };

      // Note: Animation API doesn't have an onerror event
      // We'll use try-catch instead for error handling
    } catch (error) {
      setAnimationTest(
        `Animation test error: ${error instanceof Error ? error.message : String(error)}`,
      );
    }
  }, []);

  function testCssSupport(property: string, value: string): boolean {
    if (typeof window === "undefined" || !window.CSS || !CSS.supports) {
      return false;
    }
    try {
      return CSS.supports(property, value);
    } catch (e) {
      return false;
    }
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Debug Information</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Browser Information</h2>
        <pre className="bg-gray-100 p-4 rounded overflow-auto max-h-96">
          {JSON.stringify(browserInfo, null, 2)}
        </pre>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">CSS Support</h2>
        <pre className="bg-gray-100 p-4 rounded overflow-auto max-h-96">
          {JSON.stringify(cssSupport, null, 2)}
        </pre>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Animation Test</h2>
        <div className="bg-gray-100 p-4 rounded">
          <p>{animationTest}</p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Animation Test Element</h2>
        <div className="relative h-20 bg-gray-100 rounded overflow-hidden">
          <div
            className="absolute w-16 h-16 bg-blue-500 rounded-full left-0"
            style={{
              animation: "testAnimation 2s infinite alternate",
            }}
          ></div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes testAnimation {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(100vw - 100px));
          }
        }
      `}</style>
    </div>
  );
}
