import React from 'react';

const JusticeDetail = () => {
  return (
    <div className='mt-[30px] md:mt-[64px] article-side-wrapper text-neutral-12'>
      <div className='flex md:items-center flex-col'>
        <h1 className='bold-9'>{`Breaking Down Barriers to Treatment for Opioid Use Disorder: Addressing Justice System Involvement`}</h1>
        <div className='mt-[64px] pb-8 border-b border-neutral-alpha-4'>
          <h3 className='bold-6'>Overcoming Legal System Challenges</h3>
          <p className='mt-2 regular-4'>
            {`Involvement with the legal system 
            can present significant barriers to accessing and engaging in 
            treatment for opioid use disorder (OUD). Let's explore how legal repercussions and 
            limited diversion programs can hinder recovery efforts and discuss strategies to 
            address these challenges.`}
          </p>
        </div>
        <div className='mt-[32px] pb-8  border-b border-neutral-alpha-4'>
          <h3 className='bold-6'>Legal Repercussions</h3>
          <p className='mt-2 regular-4'>
            {`Legal issues related to substance use can have lasting consequences for individuals with OUD:`}
          </p>
          <div className='mt-8 flex flex-col gap-5'>
            <div>
              <h5 className='bold-4'>Criminalization of Addiction:</h5>
              <p className='mt-2 regular-4'>
                {`Substance use disorders are often criminalized, leading to incarceration rather than treatment for individuals struggling with OUD.`}
              </p>
            </div>
            <div>
              <h5 className='bold-4'>Barriers to Treatment:</h5>
              <p className='mt-2 regular-4'>
                {`Legal involvement can create barriers to accessing treatment, as individuals may face incarceration rather than receiving the help they need.`}
              </p>
            </div>
            <div>
              <h5 className='bold-4'>Stigma and Discrimination:</h5>
              <p className='mt-2 regular-4'>
                {`Implementing diversion programs, decriminalizing substance use, and promoting alternative approaches to justice can help individuals access treatment and support their recovery journey.`}
              </p>
            </div>
          </div>
          <p className='regular-4 mt-8'>{`By addressing these issues, we can create a more supportive environment that encourages individuals to seek the help they need without fear of judgment.`}</p>
        </div>
        <div className='mt-[32px] pb-8  border-b border-neutral-alpha-4'>
          <h3 className='bold-6'>Limited Diversion Programs</h3>
          <p className='mt-2 regular-4'>
            {`Lack of diversion programs for non-violent offenders can limit access to treatment for individuals with OUD:`}
          </p>
          <div className='mt-8 flex flex-col gap-5'>
            <div>
              <h5 className='bold-4'>Incarceration vs. Treatment:</h5>
              <p className='mt-2 regular-4'>
                {`Without diversion programs, individuals may be incarcerated rather than connected to treatment and support services.`}
              </p>
            </div>
            <div>
              <h5 className='bold-4'>Missed Opportunities:</h5>
              <p className='mt-2 regular-4'>
                {`Failure to address underlying substance use issues through diversion programs perpetuates cycles of incarceration and recidivism.`}
              </p>
            </div>
            <div>
              <h5 className='bold-4'>Community Safety:</h5>
              <p className='mt-2 regular-4'>
                {`Diversion programs can promote community safety by addressing root causes of substance use and supporting individuals in their recovery journey.`}
              </p>
            </div>
          </div>
          <p className='regular-4 mt-8'>{`Expanding diversion programs, implementing pre-arrest diversion initiatives, and increasing access to treatment within the justice system can break the cycle of incarceration and support recovery for individuals with OUD.`}</p>
        </div>
        <div className='mt-[32px]'>
          <h3 className='bold-6'>Advancing Justice System Reform</h3>
          <p className='mt-2 regular-4'>
            {`To address justice system-related barriers to treatment, our coalition is committed to:`}
          </p>
          <div className='mt-8 flex flex-col gap-5'>
            <div>
              <h5 className='bold-4'>Advocacy for Policy Reform:</h5>
              <p className='mt-2 regular-4'>
                {`Advocating for policies that prioritize treatment over incarceration for individuals with substance use disorders.`}
              </p>
            </div>
            <div>
              <h5 className='bold-4'>Expansion of Diversion Programs:</h5>
              <p className='mt-2 regular-4'>
                {`Working to expand diversion programs and alternative sentencing options for non-violent offenders with OUD.`}
              </p>
            </div>
            <div>
              <h5 className='bold-4'>Education and Training:</h5>
              <p className='mt-2 regular-4'>
                {`Providing education and training for law enforcement, legal professionals, and justice system stakeholders on substance use disorders and treatment options.`}
              </p>
            </div>
            <div>
              <h5 className='bold-4'>Reentry Support Services:</h5>
              <p className='mt-2 regular-4'>
                {`Offering reentry support services, including access to treatment, housing, employment assistance, and peer support, for individuals returning to the community after incarceration.`}
              </p>
            </div>
          </div>
          <p className='regular-4 mt-8'>{`By prioritizing justice system reform initiatives, we can create a more compassionate and effective approach to addressing substance use disorders and supporting recovery for individuals with OUD.`}</p>
        </div>
      </div>
    </div>
  );
};

export default JusticeDetail;
