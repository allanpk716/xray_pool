<template>
  <div class="text-center font-bold text-4xl">Xray pool</div>
  <div class="flex row justify-center w-full mt-5" style="height: 400px">
    <div class="container">
      <n-steps class="mb-10" :current="state.currentStep">
        <n-step title="基础配置" />
        <n-step title="订阅源" />
        <n-step title="节点列表" />
      </n-steps>

      <step-basic-settings v-if="state.currentStep === 1" />
      <step-subscribe-settings v-if="state.currentStep === 2" />
      <step-node-list v-if="state.currentStep === 3" />

      <div class="flex gap-x-2 mt-4">
        <n-button @click="prevStep">上一步</n-button>
        <n-button v-if="state.currentStep === 3" @click="finishSetup" type="primary">完成</n-button>
        <n-button v-else @click="nextStep" type="primary">下一步</n-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import StepBasicSettings from '@/pages/setup/StepBasicSettings.vue';
import { finishSetup, setupState as state, useSetup } from '@/pages/setup/use-setup';
import StepSubscribeSettings from '@/pages/setup/StepSubscribeSettings.vue';
import StepNodeList from '@/pages/setup/StepNodeList.vue';

useSetup();

const nextStep = () => {
  if (state.currentStep >= 3) return;
  state.currentStep += 1;
};

const prevStep = () => {
  if (state.currentStep === 1) return;
  state.currentStep -= 1;
};
</script>

<style lang="scss" scoped>
.container {
  width: 800px;
  max-width: 1400px;
}
</style>
