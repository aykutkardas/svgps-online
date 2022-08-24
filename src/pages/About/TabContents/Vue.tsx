import Highlighter from "src/components/Highlighter";
import Icon from "src/components/Icon";

const TabContentVue = () => (
  <div>
    <p>
      <a
        className="text-white"
        href="https://github.com/aykutkardas/vue-icomoon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon icon="github" size={18} />
        vue-icomoon
      </a>
      <a
        className="text-white"
        href="https://www.npmjs.com/package/vue-icomoon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon icon="npm" size={16} color="#ea2039" />
        npm
      </a>
    </p>
    <p>Install</p>
    <Highlighter language="bash">{`npm install vue-icomoon`}</Highlighter>
    <Highlighter language="bash">{`yarn add vue-icomoon`}</Highlighter>
    <p>Define `Icon.vue` component</p>
    <Highlighter>
      {`
<template>
  <icomoon :iconSet="iconSet" v-bind="props" />
</template>

<script>
  import { Icomoon } from "vue-icomoon";
  import iconSet from "./selection.json";

  export default {
    name: "Icon",
    components: {
      Icomoon,
    },
    props: {
      name: {
        type: String,
        required: true,
      },
      // ...
    },
    setup(props) {
      return {
        props,
        iconSet,
      };
    },
  };
</script>
        `}
    </Highlighter>
    <p>And use</p>
    <Highlighter>
      {`
<template>
  <icon name="camera" :size="50" color="#5096ec" />
</template>

<script>
  import Icon from "./components/Icon/Icon.vue";

  export default {
    components: {
      Icon,
    },
  };
</script>
        `}
    </Highlighter>
    <p>
      <a
        className="text-white"
        href="https://github.com/aykutkardas/vue-icomoon"
        target="_blank"
        rel="noopener noreferrer"
      >
        vue-icomoon
      </a>
    </p>
  </div>
);

export default TabContentVue;
