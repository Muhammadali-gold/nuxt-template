import mitt from 'mitt';

export default defineNuxtPlugin(() => {
    const emitter = mitt();

    return {
        provide: {
            emitter: {
                $onEvent: emitter.on,
                $sendEvent: emitter.emit,
            },
        },
    };
});