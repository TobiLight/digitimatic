<script lang="ts">
  function onScroll() {
    let el = document.getElementById("test-2");

    if (el) {
      console.log(el.getBoundingClientRect().y);
      el.classList.add("animate__animated animate__slideInLeft");

      return el.getBoundingClientRect().y;
    }
  }
</script>

<section
  id="test-2"
  on:scroll={e => {
    console.log(e);
  }}
  class="h-[400px] bg-orange-200 w-full scale-up-center"
>
  <p>jhgffgh</p>
</section>

<style>
  .scale-up-center {
    -webkit-animation: scale-up-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1)
      both;
    animation: scale-up-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  }
</style>
