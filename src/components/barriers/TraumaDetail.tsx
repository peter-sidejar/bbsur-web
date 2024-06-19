import React from 'react';

const TraumaDetail = () => {
  return (
    <div className='mt-[30px] md:mt-[64px] article-side-wrapper text-neutral-12'>
      <div className='flex md:items-center flex-col'>
        <h1 className='bold-9'>{`Breaking Down Barriers to Treatment for Opioid Use Disorder: Addressing Trauma`}</h1>
        <div className='mt-[64px] pb-8 border-b border-neutral-alpha-4'>
          <h3 className='bold-6'>Addressing Past Traumatic Experiences</h3>
          <p className='mt-2 regular-4'>
            {`Trauma plays a significant role in the development and treatment of
             opioid use disorder (OUD). Let's explore how past traumatic experiences can impact 
             recovery efforts and discuss strategies to address trauma in the treatment process.`}
          </p>
        </div>
        <div className='mt-[32px] pb-8  border-b border-neutral-alpha-4'>
          <h3 className='bold-6'>Physical and Sexual Abuse</h3>
          <p className='mt-2 regular-4'>
            {`History of physical or sexual abuse can have lasting effects on individuals with OUD:`}
          </p>
          <div className='mt-8 flex flex-col gap-5'>
            <div>
              <h5 className='bold-4'>Trauma Triggers:</h5>
              <p className='mt-2 regular-4'>
                {`Memories of past abuse can serve as triggers for substance use, making recovery more challenging.`}
              </p>
            </div>
            <div>
              <h5 className='bold-4'>Mental Health Impact:</h5>
              <p className='mt-2 regular-4'>
                {`Survivors of abuse may experience co-occurring mental health disorders, such as PTSD or depression, complicating treatment.`}
              </p>
            </div>
            <div>
              <h5 className='bold-4'>Trust Issues:</h5>
              <p className='mt-2 regular-4'>
                {`Past betrayal and violation of trust can make it difficult for individuals to engage in therapeutic relationships and trust treatment providers.`}
              </p>
            </div>
          </div>
          <p className='regular-4 mt-8'>{`Providing trauma-informed care, trauma-focused therapy, and support groups can help individuals address past abuse and heal from trauma-related wounds.`}</p>
        </div>
        <div className='mt-[32px] pb-8  border-b border-neutral-alpha-4'>
          <h3 className='bold-6'>Adverse Childhood Experiences (ACEs)</h3>
          <p className='mt-2 regular-4'>
            {`Adverse childhood experiences can increase the risk of developing OUD later in life:`}
          </p>
          <div className='mt-8 flex flex-col gap-5'>
            <div>
              <h5 className='bold-4'>Early Trauma:</h5>
              <p className='mt-2 regular-4'>
                {`Childhood trauma, such as neglect, abuse, or household dysfunction, can shape individuals' coping mechanisms and risk behaviors.`}
              </p>
            </div>
            <div>
              <h5 className='bold-4'>Interpersonal Relationships:</h5>
              <p className='mt-2 regular-4'>
                {`Negative childhood experiences can impact individuals' ability to form healthy relationships and navigate social interactions.`}
              </p>
            </div>
            <div>
              <h5 className='bold-4'>Emotional Regulation:</h5>
              <p className='mt-2 regular-4'>
                {`Early trauma can disrupt emotional regulation skills, leading to maladaptive coping strategies, such as substance use.`}
              </p>
            </div>
          </div>
          <p className='regular-4 mt-8'>{`Addressing adverse childhood experiences through trauma-focused therapy, childhood trauma interventions, and resilience-building programs can support recovery efforts for individuals with OUD.`}</p>
        </div>
        <div className='mt-[32px]'>
          <h3 className='bold-6'>Advancing Trauma-Informed Care</h3>
          <p className='mt-2 regular-4'>
            {`To address trauma-related barriers to treatment, our coalition is committed to:`}
          </p>
          <div className='mt-8 flex flex-col gap-5'>
            <div>
              <h5 className='bold-4'>Trauma-Informed Training:</h5>
              <p className='mt-2 regular-4'>
                {`Providing trauma-informed training for healthcare providers, treatment professionals, and support staff to recognize and respond to trauma-related needs.`}
              </p>
            </div>
            <div>
              <h5 className='bold-4'>Integrated Treatment Approaches:</h5>
              <p className='mt-2 regular-4'>
                {`Implementing integrated treatment approaches that address both substance use disorder and co-occurring trauma-related issues.`}
              </p>
            </div>
            <div>
              <h5 className='bold-4'>Peer Support Services:</h5>
              <p className='mt-2 regular-4'>
                {`Offering peer support services and support groups for individuals with OUD who have experienced trauma to foster healing and connection.`}
              </p>
            </div>
            <div>
              <h5 className='bold-4'>Community Outreach:</h5>
              <p className='mt-2 regular-4'>
                {`Engaging with communities to raise awareness about trauma, reduce stigma, and promote trauma-informed approaches to care.`}
              </p>
            </div>
          </div>
          <p className='regular-4 mt-8'>{`By prioritizing trauma-informed care initiatives, we can create a more supportive and healing environment for individuals with OUD who have experienced trauma.`}</p>
        </div>
      </div>
    </div>
  );
};

export default TraumaDetail;
