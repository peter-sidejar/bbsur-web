import React from 'react';

const FinancialDetail = () => {
  return (
    <div className='mt-[30px] md:mt-[64px] article-side-wrapper text-neutral-12'>
      <div className='flex md:items-center flex-col'>
        <h1 className='bold-9'>{`Breaking Down Barriers to Treatment for Opioid Use Disorder: Removing Financial Hurdles to Treatment`}</h1>
        <div className='mt-[64px] pb-8 border-b border-neutral-alpha-4'>
          <h3 className='bold-6'>Financial Barriers to Treatment</h3>
          <p className='mt-2 regular-4'>
            {`Removing financial barriers to treatment is crucial for ensuring equitable access to 
            care for individuals with opioid use disorder (OUD). Let's explore the various financial 
            challenges individuals may face and discuss strategies to overcome them.`}
          </p>
        </div>
        <div className='mt-[32px] pb-8  border-b border-neutral-alpha-4'>
          <h3 className='bold-6'>Lack of Insurance</h3>
          <p className='mt-2 regular-4'>
            {`Limited or no insurance coverage for treatment can pose a significant barrier to accessing care for OUD:`}
          </p>
          <div className='mt-8 flex flex-col gap-5'>
            <div>
              <p className='bold-4'>{`Uninsured Individuals: Those without insurance may struggle to afford treatment services, including medications, therapy, and other necessary interventions.`}</p>
            </div>
            <div>
              <p className='bold-4'>{`Underinsured Individuals: Even individuals with insurance coverage may face high out-of-pocket costs, limited coverage for addiction treatment services, or high deductibles that create financial barriers to care.`}</p>
            </div>
          </div>
          <p className='regular-4 mt-8'>{`Addressing the lack of insurance coverage for addiction treatment services is essential to ensure that all individuals have access to the care they need to overcome OUD.`}</p>
        </div>
        <div className='mt-[32px] pb-8  border-b border-neutral-alpha-4'>
          <h3 className='bold-6'>High Copays and Deductibles</h3>
          <p className='mt-2 regular-4'>
            {`Financial barriers, such as high copayments and deductibles, can deter individuals from seeking treatment for OUD:`}
          </p>
          <div className='mt-8 flex flex-col gap-5'>
            <div>
              <p className='bold-4'>{`Financial Strain: High copayments and deductibles can create financial strain for individuals already facing financial instability due to OUD.`}</p>
            </div>
            <div>
              <p className='bold-4'>{`Choice Between Treatment and Finances: Individuals may be forced to choose between paying for treatment and meeting other essential financial obligations, such as housing, food, and utilities.`}</p>
            </div>
          </div>
          <p className='regular-4 mt-8'>{`Reducing copayments and deductibles for addiction treatment services can help alleviate financial burdens and improve access to care for individuals with OUD.`}</p>
        </div>
        <div className='mt-[32px] pb-8  border-b border-neutral-alpha-4'>
          <h3 className='bold-6'>Unemployed / Underemployed</h3>
          <p className='mt-2 regular-4'>
            {`Employment status can impact affordability and access to treatment for OUD:`}
          </p>
          <div className='mt-8 flex flex-col gap-5'>
            <div>
              <h5 className='bold-4'>Limited Financial Resources:</h5>
              <p className='mt-2 regular-4'>
                {`Unemployed or underemployed individuals may lack the financial resources to afford treatment services, particularly if they do not have insurance coverage.`}
              </p>
            </div>
            <div>
              <h5 className='bold-4'>Lack of Employer-Sponsored Coverage:</h5>
              <p className='mt-2 regular-4'>
                {`Many individuals may lose employer-sponsored health insurance coverage when they become unemployed, further exacerbating financial barriers to care.`}
              </p>
            </div>
          </div>
          <p className='regular-4 mt-8'>{`Supporting unemployed and underemployed individuals with access to affordable treatment options and insurance coverage can help remove financial barriers to care.`}</p>
        </div>
        <div className='mt-[32px] pb-8  border-b border-neutral-alpha-4'>
          <h3 className='bold-6'>No Income / Low Income</h3>
          <p className='mt-2 regular-4'>
            {`Financial instability due to lack of income or low income can hinder access to treatment for OUD:`}
          </p>
          <div className='mt-8 flex flex-col gap-5'>
            <div>
              <h5 className='bold-4'>Limited Ability to Afford Treatment:</h5>
              <p className='mt-2 regular-4'>
                {`Individuals with no income or low income may struggle to afford treatment services, medications, and other necessary interventions.`}
              </p>
            </div>
            <div>
              <h5 className='bold-4'>Unmet Basic Needs:</h5>
              <p className='mt-2 regular-4'>
                {`Financial instability may force individuals to prioritize meeting basic needs, such as housing and food, over seeking treatment for OUD.`}
              </p>
            </div>
          </div>
          <p className='regular-4 mt-8'>{`Providing financial assistance programs, sliding-scale fees, and other support services can help individuals with no income or low income access the care they need to overcome OUD.`}</p>
        </div>
        <div className='mt-[32px]'>
          <h3 className='bold-6'>Advancing Financial Access Initiatives</h3>
          <p className='mt-2 regular-4'>
            {`To address these financial barriers, our coalition is committed to:`}
          </p>
          <div className='mt-8 flex flex-col gap-5'>
            <div>
              <h5 className='bold-4'>Advocacy for Insurance Coverage:</h5>
              <p className='mt-2 regular-4'>
                {`Advocating for policies that expand insurance coverage for addiction treatment services and reduce out-of-pocket costs for individuals with OUD.`}
              </p>
            </div>
            <div>
              <h5 className='bold-4'>Financial Assistance Programs:</h5>
              <p className='mt-2 regular-4'>
                {`Establishing financial assistance programs, sliding-scale fee structures, and other support services to help individuals afford treatment services.`}
              </p>
            </div>
            <div>
              <h5 className='bold-4'>Employment Support Services:</h5>
              <p className='mt-2 regular-4'>
                {`Providing employment support services, job training programs, and resources to help individuals secure stable employment and access employer-sponsored insurance coverage.`}
              </p>
            </div>
            <div>
              <h5 className='bold-4'>Community Outreach:</h5>
              <p className='mt-2 regular-4'>
                {`Raising awareness about available financial assistance programs and support services to ensure that individuals know how to access financial resources for treatment.`}
              </p>
            </div>
          </div>
        </div>
        <p className='regular-4 mt-8'>
          {`By prioritizing financial access initiatives, we can ensure that all individuals, regardless of their financial circumstances, have the opportunity to receive the care and support they need to overcome opioid use disorder.`}
        </p>
      </div>
    </div>
  );
};

export default FinancialDetail;
