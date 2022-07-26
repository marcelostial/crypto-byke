/*
 * ***********************************************************************
 * Compass UOL CONFIDENTIAL
 * ___________________
 *
 * Copyright 2022 Compass UOL.
 * All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains the property
 * of Compass UOL and its suppliers, if any. The intellectual and
 * technical concepts contained herein are proprietary to Compass UOL
 * and its suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Compass UOL.
 * ***********************************************************************
 */

package com.uol.cryptobike.core.models.impl;

import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import com.uol.cryptobike.core.models.Header;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Model(adaptables = {
    SlingHttpServletRequest.class
}, adapters = {
    Header.class,
    ComponentExporter.class
}, resourceType = "cryptobike/components/header")
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class HeaderImpl
    implements Header
{

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String firstbuttonlabel;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String firstlinklabel;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String secondbuttonlabel;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String secondlinklabel;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String thirdbuttonlabel;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String thirdlinklabel;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String fourthbuttonlabel;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String fourthlinklabel;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String fifthbuttonlabel;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String fifthlinklabel;
    @SlingObject
    private Resource resource;

    @Override
    public String getFirstbuttonlabel() {
        return firstbuttonlabel;
    }

    @Override
    public String getFirstlinklabel() {
        return firstlinklabel;
    }

    @Override
    public String getSecondbuttonlabel() {
        return secondbuttonlabel;
    }

    @Override
    public String getSecondlinklabel() {
        return secondlinklabel;
    }

    @Override
    public String getThirdbuttonlabel() {
        return thirdbuttonlabel;
    }

    @Override
    public String getThirdlinklabel() {
        return thirdlinklabel;
    }

    @Override
    public String getFourthbuttonlabel() {
        return fourthbuttonlabel;
    }

    @Override
    public String getFourthlinklabel() {
        return fourthlinklabel;
    }

    @Override
    public String getFifthbuttonlabel() {
        return fifthbuttonlabel;
    }

    @Override
    public String getFifthlinklabel() {
        return fifthlinklabel;
    }

    @Override
    public String getExportedType() {
        return resource.getResourceType();
    }

}
