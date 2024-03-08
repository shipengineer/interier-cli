<template>
    <div class="bigProject">
    <HeaderComponent/>
    <div class="bookmark">
        <img
        src="@/assets/bookmarks/2.png"
        class="bookmark__img"
        />
    </div>
    <ProjectDetails  :project="project" />
    <FooterComponent/>
    </div>
</template>

<script>
import FooterComponent from '@/components/FooterComponent.vue';
  import HeaderComponent from '@/components/HeaderComponent.vue';
import ProjectDetails from '@/components/ProjectDetails.vue';
export default{
    name:'BigProjectView',
    components:{
        FooterComponent,
        HeaderComponent,
        ProjectDetails
    },
    data(){
        return{
            project:
                {
                    id:1,
                    name:"Minimal Look Bedrooms",
                    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. <br><br> In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.",
                    img:[
                        "./projects-view/project.png",
                        "./projects-view/project2-2.png",
                        "./projects-view/project2-3.png",
                        "./projects-view/project2-4.png",
                        
                    ]
                }
            
        }
    }

}
</script>