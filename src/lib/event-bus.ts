// Simple event bus for component communication
type EventCallback = (...args: any[]) => void;

interface IEventBus {
  subscribe(event: string, callback: EventCallback): () => void;
  publish(event: string, ...args: any[]): void;
}

class EventBus implements IEventBus {
  private events: Record<string, EventCallback[]> = {};

  subscribe(event: string, callback: EventCallback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);

    // Return unsubscribe function
    return () => {
      this.events[event] = this.events[event].filter((cb) => cb !== callback);
    };
  }

  publish(event: string, ...args: any[]) {
    if (this.events[event]) {
      this.events[event].forEach((callback) => callback(...args));
    }
  }
}

// Create a singleton instance
const createEventBus = (): IEventBus => {
  // Check if window is defined (client side)
  if (typeof window !== "undefined") {
    return new EventBus();
  }
  // Server-side placeholder
  return {
    subscribe: () => () => {},
    publish: () => {},
  };
};

const eventBus = createEventBus();

export default eventBus;
